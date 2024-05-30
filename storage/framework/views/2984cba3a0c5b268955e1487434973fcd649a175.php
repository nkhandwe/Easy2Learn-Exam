

<div class="background-image bg-cover bg-center bg-no-repeat">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:justify-between">
            <div class="lg:w-1/2 text-left lg:text-left mb-12 lg:mb-0 mt-40">
                <img class="-mt-20"
                    src="https://prepmaster.in/wp-content/uploads/2021/01/home-online-art-testimonial-image.png"
                    alt="">
                <h2 class="text-2xl text-secondary font-semibold tracking-wide mt-5 uppercase"><?php echo e(__('Testimonials')); ?>

                </h2>
                <h1 class="text-5xl font-bold text-primary mb-4"><?php echo e($title); ?></h1>
                <p class="text-gray-600 mb-6"><?php echo e($subtitle); ?></p>
                <a href="<?php echo e(route('register')); ?>">
                    <button class="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-secondary">
                        Register Free Account!
                    </button>
                </a>
            </div>

            <div class="lg:w-2/6 relative testimonial-container">
                <?php $__currentLoopData = [1, 2]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $i): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="absolute inset-0 bg-white shadow-lg rounded-lg p-6 text-center card card-test transition-opacity duration-300 ease-in-out"
                        style="z-index: <?php echo e(10 - $i); ?>;">
                        <div class="card-image">
                            <img class="w-full h-full object-cover" src="<?php echo e(${'testimonial' . $i}[3]); ?>"
                                alt="<?php echo e(${'testimonial' . $i}[3]); ?>" role="img">
                        </div>
                        <div class="mt-10">
                            <h2 class="text-base font-semibold text-primary mb-2"><?php echo e(${'testimonial' . $i}[2]); ?></h2>
                        </div>
                        <div class="mt-10">
                            <p class="text-base font-semibold leading-4 text-gray-800"><?php echo e(${'testimonial' . $i}[0]); ?>

                            </p>
                            <p class="text-base leading-4 mt-2 text-center text-gray-600"><?php echo e(${'testimonial' . $i}[1]); ?>

                            </p>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    </div>
</div>

<style>
    .card-test {
        transition: filter 0.3s ease, transform 0.3s ease, z-index 0s ease 0.3s;
        cursor: pointer;
        position: absolute;
        padding-top: 40px;
        height: 250px;
        width: 600px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .card-test.active {
        z-index: 9999;
        filter: none;
        transform: translate(-50%, -50%) scale(1.05);
        transition: transform 0.3s ease, z-index 0s ease 0s;
    }

    .card-test:not(.active) {
        z-index: 0 !important;
        margin-top: 100px;
        filter: blur(1px);
        transition: transform 0.3s ease, z-index 0s ease 0.3s;
    }

    .testimonial-container {
        position: relative;
        height: 400px;
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });

        if (cards.length > 0) {
            cards[0].classList.add('active');
        }
    });
</script>
<?php /**PATH C:\xampp\htdocs\resources\views/components/testimonials.blade.php ENDPATH**/ ?>