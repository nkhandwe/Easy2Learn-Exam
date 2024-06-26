<?php
/**
 * File name: CategoryCrudController.php
 * Last modified: 19/07/21, 12:55 AM
 * Author: NearCraft - https://codecanyon.net/user/nearcraft
 * Copyright (c) 2021
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Filters\CategoryFilters;
use App\Http\Requests\Admin\StoreCategoryRequest;
use App\Http\Requests\Admin\UpdateCategoryRequest;
use App\Models\Category;
use App\Transformers\Admin\CategoryTransformer;
use Inertia\Inertia;

class CategoryCrudController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    /**
     * List all categories
     *a
     * @param CategoryFilters $filters
     * @return \Inertia\Response
     */
    public function index(CategoryFilters $filters)
    {
        return Inertia::render('Admin/Categories', [
            'categories' => function () use ($filters) {
                return fractal(Category::filter($filters)
                    ->paginate(request()->perPage != null ? request()->perPage : 10),
                    new CategoryTransformer())->toArray();
            },
        ]);
    }

    /**
     * Store a category
     *
     * @param StoreCategoryRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreCategoryRequest $request)
    {
        Category::create($request->validated());
        return redirect()->back()->with('successMessage', 'Board was successfully added!');
    }

    /**
     * Show a category
     *
     * @param $id
     * @return array
     */
    public function show($id)
    {
        return fractal(Category::findOrFail($id), new CategoryTransformer())->toArray();
    }

    /**
     * Edit a category
     *
     * @param $id
     * @return Category|Category[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     */
    public function edit($id)
    {
        return Category::find($id);
    }

    /**
     * Update a category
     *
     * @param UpdateCategoryRequest $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateCategoryRequest $request, $id)
    {
        $category = Category::find($id);
        $category->update($request->validated());
        return redirect()->back()->with('successMessage', 'Board was successfully updated!');
    }

    /**
     * Delete a category
     *
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        try {
            $category = Category::withCount(['subCategories', 'plans'])->find($id);

            if(!$category->canSecureDelete('subCategories', 'plans')) {
                $associations = implode(", ", array_filter([
                    $category->sub_categories_count > 0 ? "{$category->sub_categories_count} sub categories" : "",
                    $category->plans_count > 0 ? "{$category->plans_count} plans" : ""
                ]));
                return redirect()->back()
                    ->with('errorMessage',
                        "Unable to delete Board as it is associated with {$associations}. Remove all associations and try again!"
                    );
            }

            $category->secureDelete('subCategories', 'plans');

        } catch (\Illuminate\Database\QueryException $e) {
            return redirect()->back()
                ->with('errorMessage', 'Unable to Delete Board . Remove all associations and Try again!');
        }
        return redirect()->back()
            ->with('successMessage', 'Board was successfully deleted!');
    }
}
