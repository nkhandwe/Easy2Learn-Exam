<div class="max-w-9xl bg-gray-200 pb-5 pt-5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="container bg-white mb-30 rounded-xl p-10">
            <div class="text-center mb-10">
                <h1 class="text-3xl text-primary font-bold mt-10 mb-8">How We Create Great Results</h1>
            </div>
            <div class="flex flex-wrap justify-center -mx-4">
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div class="flex items-center justify-center">
                        <img src="https://www.tcyonline.com/india/images/peer_bench-Icon.png" class="h-16 w-16">
                        <div class="ml-4">
                            <h3 class="font-bold text-xl">Remedial Methodology</h3>
                            <p class="text-sm">Identify & improve your weak areas</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div class="flex items-center justify-center">
                        <img src="https://www.tcyonline.com/india/images/test_gen_icon.png" class="h-16 w-16">
                        <div class="ml-4">
                            <h3 class="font-bold text-xl">Personalised Learning</h3>
                            <p class="text-sm">Build your own tests using Test Generator</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div class="flex items-center justify-center">
                        <img src="https://www.tcyonline.com/india/images/analytic_icon.png" class="h-16 w-16">
                        <div class="ml-4">
                            <h3 class="font-bold text-xl">Peer Benchmarking</h3>
                            <p class="text-sm">Get comparative score against toppers</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                    <div class="flex items-center justify-center">
                        <img src="https://www.tcyonline.com/india/images/study-planner-icon.png" class="h-16 w-16">
                        <div class="ml-4">
                            <h3 class="font-bold text-xl">Actual Test Interface</h3>
                            <p class="text-sm">Get the real feel of the exam in mock tests</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-10">
                <a href="{{ route('register') }}"
                    class="inline-block bg-primary py-2 px-6 text-white text-lg rounded-md hover:bg-secondary">Sign Up
                    for Free Tests</a>
            </div>
        </div>
    </div>
</div>

<div class="h-10"></div>
@php
    $subCategories = \App\Models\SubCategory::with('sections')
        ->where('category_id', $category['id'])
        ->get();
@endphp

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-4 border-b">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
            data-tabs-toggle="#default-tab-content" role="tablist">
            @foreach ($subCategories as $key => $subcategory)
                <li class="me-2" role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 rounded-t-lg text-2xl hover:text-secondary dark:hover:text-gray-300 {{ $key == 0 ? 'active' : '' }}"
                        id="tab-{{ $subcategory->id }}" data-tabs-target="#tab-content-{{ $subcategory->id }}"
                        type="button" role="tab" aria-controls="tab-content-{{ $subcategory->id }}"
                        aria-selected="{{ $key == 0 ? 'true' : 'false' }}">{{ $subcategory->name }}</button>
                </li>
            @endforeach
        </ul>
    </div>
    <div id="default-tab-content">
        @foreach ($subCategories as $subcategory)
            <div id="tab-content-{{ $subcategory->id }}" role="tabpanel" aria-labelledby="tab-{{ $subcategory->id }}"
                class="hidden p-4">
                <h2 class="text-2xl font-bold mb-8 text-primary">{{ $subcategory->name }} Test Series</h2>
                @if ($subcategory->sections->isEmpty())
                    <p>No sections available.</p>
                @else
                    <div class="md:flex">
                        <ul
                            class="flex-column space-y-4 text-sm font-medium text-white  dark:text-gray-400 md:me-4 mb-4 md:mb-0 mr-5">
                            @foreach ($subcategory->sections as $section)
                                <li>
                                    <a href="#"
                                        class="inline-flex items-center px-4 text-2xl bg-primary py-3 rounded-lg hover:text-white
                                         hover:bg-secondary w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                        {{ $section->name }}
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                        <div
                            class="p-6 bg-gray-50 text-medium text-black dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ $subcategory->name }}
                                Sections</h3>
                            <p class="mb-2">This is some placeholder content for the sections associated with the
                                "{{ $subcategory->name }}" subcategory. Clicking another tab will toggle the visibility
                                of this one for the next.</p>
                            <p>The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                    </div>
                @endif
            </div>
        @endforeach
    </div>
</div>
<div class="h-20"></div>

<section id="pricing" class="bg-gray-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-base text-secondary font-semibold tracking-wide uppercase">{{ __('Pricing') }}</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                {{ $category['name'] }} {{ __('Subscription Plans') }}
            </p>
            <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                {{ __('To be paid as a one-time payment.') }}
            </p>
        </div>
        <div class="mt-16 flex flex-wrap items-center justify-center gap-6">
            @foreach ($plans as $plan)
                <x-plan :plan="$plan" />
            @endforeach
        </div>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const subcategoryTabs = document.querySelectorAll('[data-tabs-target]');
        const subcategoryTabContents = document.querySelectorAll('[role="tabpanel"]');
        const sectionLinks = document.querySelectorAll('.section-link');
        const sectionContents = document.querySelectorAll('[id^="section-content-"]');

        subcategoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabsTarget);

                subcategoryTabContents.forEach(tc => tc.classList.add('hidden'));
                subcategoryTabs.forEach(t => t.classList.remove('border-primary',
                    'text-primary'));

                tab.classList.add('border-primary', 'text-primary');
                target.classList.remove('hidden');

                // Reset section links and content
                sectionContents.forEach(sc => sc.classList.add('hidden'));
                const firstSectionLink = target.querySelector('.section-link');
                if (firstSectionLink) {
                    firstSectionLink.click();
                }
            });
        });

        sectionLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const target = document.querySelector(link.dataset.sectionTarget);

                sectionContents.forEach(sc => sc.classList.add('hidden'));
                sectionLinks.forEach(sl => sl.classList.remove('bg-blue-700', 'text-white'));

                link.classList.add('bg-blue-700', 'text-white');
                target.classList.remove('hidden');
            });
        });

        // Optionally activate the first tab and first section
        if (subcategoryTabs.length) {
            subcategoryTabs[0].click();
        }
    });
</script>

<style>
    [role="tab"] {
        border-bottom: 4px solid transparent;
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
    }

    [role="tab"].active {
        border-bottom-color: var(--primary-color);
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
    }

    [role="tab"].active .text-primary {
        color: var(--primary-color);
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
    }
</style>
