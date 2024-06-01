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
                <a href="<?php echo e(route('register')); ?>"
                    class="inline-block bg-primary py-2 px-6 text-white text-lg rounded-md hover:bg-secondary">Sign Up
                    for Free Tests</a>
            </div>
        </div>
    </div>
</div>

<div class="h-10"></div>
<?php
    $subCategories = \App\Models\SubCategory::with('sections')
        ->where('category_id', $category['id'])
        ->get();
?>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-4 border-b">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
            data-tabs-toggle="#default-tab-content" role="tablist">
            <?php $__currentLoopData = $subCategories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $subcategory): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li class="me-2" role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 rounded-t-lg text-base hover:text-secondary dark:hover:text-gray-300 <?php echo e($key == 0 ? 'active' : ''); ?>"
                        id="tab-<?php echo e($subcategory->id); ?>" data-tabs-target="#tab-content-<?php echo e($subcategory->id); ?>"
                        type="button" role="tab" aria-controls="tab-content-<?php echo e($subcategory->id); ?>"
                        aria-selected="<?php echo e($key == 0 ? 'true' : 'false'); ?>"><?php echo e($subcategory->name); ?></button>
                </li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
    <div id="default-tab-content">
        <?php $__currentLoopData = $subCategories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $subcategory): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div id="tab-content-<?php echo e($subcategory->id); ?>" role="tabpanel" aria-labelledby="tab-<?php echo e($subcategory->id); ?>"
                class="hidden p-4">
                <h2 class="text-2xl font-bold mb-8 text-primary"><?php echo e($subcategory->name); ?> Test Series</h2>
                <?php if($subcategory->sections->isEmpty()): ?>
                    <p>No Exams available.</p>
                <?php else: ?>
                    <div class="md:flex">
                        <div class="quant-outter w-full md:w-1/3 overflow-hidden">
                            <ul>
                                <li class="quant-outter">
                                    <div class="quant-block hiddenMenu text-base font-bold active">
                                        <span class="examlvlcon">A</span>
                                        <a class="quant-close section-link" id="allTest"
                                            onclick="toggleContent('all', this)">All Tests</a>
                                    </div>
                                    <?php $__currentLoopData = $subcategory->sections; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $section): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div class="quant-block text-base">
                                            <?php
                                                $firstLetter = strtoupper(substr($section->name, 0, 1));
                                            ?>
                                            <span class="examlvlcon"><?php echo e($firstLetter); ?></span>
                                            <a class="text-base font-bold section-link"
                                                onclick="toggleContent('<?php echo e($section->id); ?>', this)"><?php echo e($section->name); ?></a>
                                        </div>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </li>
                            </ul>
                        </div>
                        <div class="p-6  text-medium text-black dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                            <div class="relative overflow-x-auto">
                                <?php
                                    $allExams = \App\Models\Exam::where('sub_category_id', $subcategory->id)->get();
                                ?>
                                <?php if($allExams->isEmpty()): ?>
                                    <h1>No Tests available.</h1>
                                <?php else: ?>
                                    <table id="table-all"
                                        class="w-full text-sm text-left rtl:text-right text-dark dark:text-gray-400">
                                        <thead
                                            class="text-xs uppercase bg-primary text-white dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-base font-bold">SL</th>
                                                <th scope="col" class="px-6 py-3 text-base font-bold">Exam Name</th>
                                                <th scope="col" class="px-6 py-3 text-base font-bold">Duration</th>
                                                <th scope="col" class="px-6 py-3 text-base font-bold">Questions</th>
                                                <th scope="col" class="px-6 py-3 text-base font-bold">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php $__currentLoopData = $allExams; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $exam): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row"
                                                        class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <?php echo e($key + 1); ?>

                                                    </th>
                                                    <td class="px-2 py-2 text-base font-bold"><?php echo e($exam->title); ?></td>
                                                    <td class="px-2 py-2 text-base font-bold">
                                                        <?php echo e($exam->total_duration); ?> Min.</td>
                                                    <td class="px-2 py-2 text-base font-bold">
                                                        <?php echo e($exam->total_questions); ?> Ques.</td>
                                                    <td class="px-2 py-2 text-base font-bold">
                                                        <?php if($exam->is_paid == 0): ?>
                                                            <a
                                                                href="<?php echo e(route('exam_instructions', ['exam' => $exam->slug])); ?>">
                                                                <button type="button"
                                                                    class="text-white p-2 bg-primary hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Start
                                                                    Test</button>
                                                            </a>
                                                        <?php else: ?>
                                                            <button type="button"
                                                                class="text-white p-2 bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                                onClick="scrollToPricing()"><i class="fa fa-lock"></i>
                                                                Unlock</button>
                                                        <?php endif; ?>
                                                    </td>
                                                </tr>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </tbody>
                                    </table>
                                    <?php $__currentLoopData = $subcategory->sections; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $section): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php
                                            $sectionExamIds = \DB::table('exam_sections')
                                                ->where('section_id', $section->id)
                                                ->pluck('exam_id');
                                            $sectionExams = \App\Models\Exam::whereIn('id', $sectionExamIds)->get();
                                        ?>
                                        <?php if($sectionExams->isEmpty()): ?>
                                            <h1 id="table-<?php echo e($section->id); ?>" class="hidden">No Tests available in
                                                this section.</h1>
                                        <?php else: ?>
                                            <table id="table-<?php echo e($section->id); ?>"
                                                class="w-full text-sm text-left rtl:text-right text-dark dark:text-gray-400 hidden">
                                                <thead
                                                    class="text-xs uppercase bg-primary text-white dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3 text-base font-bold">SL
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-base font-bold">Exam
                                                            Name</th>
                                                        <th scope="col" class="px-6 py-3 text-base font-bold">
                                                            Duration</th>
                                                        <th scope="col" class="px-6 py-3 text-base font-bold">
                                                            Questions</th>
                                                        <th scope="col" class="px-6 py-3 text-base font-bold">
                                                            Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php $__currentLoopData = $sectionExams; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $exam): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <tr
                                                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row"
                                                                class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                <?php echo e($key + 1); ?>

                                                            </th>
                                                            <td class="px-2 py-2 text-base font-bold">
                                                                <?php echo e($exam->title); ?></td>
                                                            <td class="px-2 py-2 text-base font-bold">
                                                                <?php echo e($exam->total_duration); ?> Min.</td>
                                                            <td class="px-2 py-2 text-base font-bold">
                                                                <?php echo e($exam->total_questions); ?> Ques.</td>
                                                            <td class="px-2 py-2 text-base font-bold">
                                                                <?php if($exam->is_paid == 0): ?>
                                                                    <a
                                                                        href="<?php echo e(route('exam_instructions', ['exam' => $exam->slug])); ?>">
                                                                        <button type="button"
                                                                            class="text-white p-2 bg-primary hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Start
                                                                            Test</button>
                                                                    </a>
                                                                <?php else: ?>
                                                                    <button type="button"
                                                                        class="text-white p-2 bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                                        onClick="scrollToPricing()"><i
                                                                            class="fa fa-lock"></i> Unlock</button>
                                                                <?php endif; ?>
                                                            </td>
                                                        </tr>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </tbody>
                                            </table>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</div>
<div class="h-20"></div>

<section id="pricing" class="bg-gray-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-base text-secondary font-semibold tracking-wide uppercase"><?php echo e(__('Pricing')); ?></h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                <?php echo e($category['name']); ?> <?php echo e(__('Subscription Plans')); ?>

            </p>
            <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                <?php echo e(__('To be paid as a one-time payment.')); ?>

            </p>
        </div>
        <div class="mt-16 flex flex-wrap items-center justify-center gap-6">
            <?php $__currentLoopData = $plans; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $plan): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if (isset($component)) { $__componentOriginal8ac4ab7405be44d184feb11078f9ffa7464e15f6 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Plan::class, ['plan' => $plan]); ?>
<?php $component->withName('plan'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>
<?php if (isset($__componentOriginal8ac4ab7405be44d184feb11078f9ffa7464e15f6)): ?>
<?php $component = $__componentOriginal8ac4ab7405be44d184feb11078f9ffa7464e15f6; ?>
<?php unset($__componentOriginal8ac4ab7405be44d184feb11078f9ffa7464e15f6); ?>
<?php endif; ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const subcategoryTabs = document.querySelectorAll('[data-tabs-target]');
        const subcategoryTabContents = document.querySelectorAll('[role="tabpanel"]');

        subcategoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabsTarget);

                subcategoryTabContents.forEach(tc => tc.classList.add('hidden'));
                subcategoryTabs.forEach(t => t.classList.remove('border-primary',
                    'text-primary'));

                tab.classList.add('border-primary', 'text-primary');
                target.classList.remove('hidden');
            });
        });

        // Optionally activate the first tab
        if (subcategoryTabs.length) {
            subcategoryTabs[0].click();
        }
    });
</script>
<style>
    .head-category ul {
        float: left;
        width: 100%;
        margin: 0px;
        padding: 0px;
        list-style: none;
        position: relative;
    }

    .quant-outter ul li:last-child {
        border: none;
    }

    .quant-outter ul li {
        float: left;
        width: 100%;
        margin-top: 10px;
        border-right: 1px solid #ccc;
    }

    .quant-block {
        float: left;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d3dede;
        border-right: 1px solid #d3dede;
        border-top: medium none;
        padding: 10px;
    }

    .examlvlcon {
        border: 2px solid var(--primary-color);
        color: #000;
        float: left;
        background: var(--primary-color);
        /* font-family: calibri, calibriregular; */
        font-size: 17px;
        color: white;
        font-weight: bold;
        line-height: normal;
        margin-right: 10px;
        padding: 1px;
        text-align: center;
        text-transform: uppercase;
        width: 27px;
    }

    .quant-outter .quant-block.active {
        border-bottom: 1px solid #d3dede !important;
        border-right: 4px solid var(--primary-color) !important;
        background: #f5fafa !important;
    }

    .quant-outter ul li a {
        background: none;
        color: #666;
        float: left;
        font-family: calibri, calibriregular;
        font-size: 16px;
        /* padding: 10px; */
        width: 80%;
        line-height: 29px;
    }
</style>
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

    [role="tab"].hover {
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;

    }

    [role="tab"].button:focus {
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;

    }
</style>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const examLinks = document.querySelectorAll('.quant-close');

        examLinks.forEach(link => {
            const examTitle = link.getAttribute('title');
            if (examTitle) {
                const firstLetter = examTitle.charAt(0).toUpperCase();
                const spanElement = document.createElement('span');
                spanElement.className = 'examlvlcon';
                spanElement.textContent = firstLetter;
                link.parentNode.insertBefore(spanElement, link);
            }
        });
    });
</script>
<script>
    function toggleContent(sectionId, element) {
        // Hide all tables first
        var tables = document.querySelectorAll('[id^="table-"]');
        tables.forEach(function(table) {
            table.classList.add('hidden');
        });

        // Remove active class from all section links
        var links = document.querySelectorAll('.section-link');
        links.forEach(function(link) {
            link.parentElement.classList.remove('active');
        });

        // Add active class to the clicked section link
        element.parentElement.classList.add('active');

        // Show the selected table
        if (sectionId === 'all') {
            // Show the table for all exams
            document.getElementById('table-all').classList.remove('hidden');
        } else {
            // Show only the selected section's table
            var table = document.getElementById('table-' + sectionId);
            if (table) {
                table.classList.remove('hidden');
            }
        }
    }

    // Set default active section and content
    document.addEventListener('DOMContentLoaded', function() {
        toggleContent('all', document.getElementById('allTest'));
    });
</script>
<script>
    function scrollToPricing() {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
</script>
<?php /**PATH C:\xampp\htdocs\resources\views/components/pricing.blade.php ENDPATH**/ ?>