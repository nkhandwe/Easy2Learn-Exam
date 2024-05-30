<div class="h-20 bg-white"></div>
<div class="h-20 bg-white"></div>
<div class="h-20 bg-white"></div>
<!-- Main container with background image -->
<div class="background-image bg-cover bg-center bg-no-repeat">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:justify-between">
            <!-- Title and Description Section -->
            <div class="lg:w-1/2 text-left lg:text-left mb-12 lg:mb-0 mt-40">
                <h2 class="text-2xl text-secondary font-semibold tracking-wide uppercase"><?php echo e(__('Features')); ?></h2>
                <h1 class="text-5xl font-bold text-primary mb-4"> <?php echo e($title); ?></h1>
                <p class="text-gray-600 mb-6">
                    <?php echo e($subtitle); ?>

                </p>
                <a href="<?php echo e(route('register')); ?>">
                    <button class="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-secondary">
                        Register Free Account!
                    </button>
                </a>
            </div>

            <!-- Features Section -->
            <div class="lg:w-2/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <!-- Feature Cards -->
                <?php $__currentLoopData = [1, 2, 3, 4]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $i): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="bg-white shadow-lg rounded-lg p-6 text-center card">
                        <div class="card-image">
                            <img class="w-full h-full object-cover" src="<?php echo e(${'feature' . $i}[2]); ?>"
                                alt="<?php echo e(${'feature' . $i}[0]); ?>" role="img">
                        </div>
                        <div class="mt-10">
                            <h2 class="text-xl font-semibold text-purple-700 mb-2"><?php echo e(${'feature' . $i}[0]); ?></h2>
                        </div>
                        <div class="mt-10">
                            <p class="text-gray-600"><?php echo e(${'feature' . $i}[1]); ?></p>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    </div>
</div>


<style>
    /* Custom styles can go here */
    .background-image {
        background-image: url('https://prepmaster.in/wp-content/uploads/2024/03/software_pattern__.png');
    }

    .card-image {
        position: absolute;
        top: -20px;
        left: 20px;
        width: 60px;
        height: 60px;
        border-radius: 9999px;
        overflow: hidden;
    }

    .card {
        position: relative;
        padding-top: 40px;
        height: 350px;
        width: 300px;
        margin-bottom: 20px;
    }
</style>
<?php /**PATH C:\xampp\htdocs\resources\views/components/features.blade.php ENDPATH**/ ?>