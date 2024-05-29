<?php

/**
 * File name: CategoryTransformer.php
 * Last modified: 01/02/21, 5:16 PM
 * Author: NearCraft - https://codecanyon.net/user/nearcraft
 * Copyright (c) 2021
 */

namespace App\Transformers\Admin;

use App\Models\Board;
use League\Fractal\TransformerAbstract;

class BoardTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param Board $category
     * @return array
     */
    public function transform(Board $board)
    {
        return [
            'id' => $board->id,
            'name' => $board->name,
            'image_path' => $board->image_path,
            'status' => $board->is_active ? 'Active' : 'In-active',
        ];
    }
}
