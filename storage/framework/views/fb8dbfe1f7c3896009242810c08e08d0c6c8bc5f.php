
<?php if($homePageSettings->enable_footer): ?>
    <div class="h-20"></div>
    <footer class=" bg-gray-800" aria-labelledby="footer-heading" aria-label="footer">
        <div class="bg-primary rounded-3xl grid md:grid-cols-3   max-w-7xl p-10 py-10 mx-auto"
            style="transform: translateY(-6rem)">
            <div class="md:col-span-2 text-white max-w-xl">
                <h2 class="text-4xl font-medium leading-none">
                    Power up a Better Communications Experience
                </h2>
                <h3 class="text-xl font-thin mt-2">
                    Our 24/7 support team is available to help with your integrations.
                </h3>
            </div>
            <div class="grid md:grid-cols-2 my-auto">
                <a href="" class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button type="submit"
                        class="flex w-full text-lg font-normal items-center justify-center rounded-full border bg-white px-5 transition-all cursor-pointer duration-300  py-4 text-sm font-semibold hover:text-white hover:translate-y-2  text-primary shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Get
                        In Touch</button>
                </a>
                <a href="" class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button type="submit"
                        class="flex w-full text-nowrap text-lg font-normal items-center justify-center rounded-full border bg-primary px-5  py-4 text-sm font-semibold text-white hover:bg-white hover:text-primary transition-all cursor-pointer hover:translate-y-2  shadow-sm focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-primary">Talk
                        to Experts</button>
                </a>
            </div>
        </div>

        <h2 id="footer-heading" class="sr-only"></h2>
        <div class="mx-auto max-w-7xl px-6  pb-8 pt-2 sm:pt-2 lg:px-8 lg:pt-2 mt-5 ">
            <a href="/"><img src="<?php echo e(asset('storage/' . $siteSettings['white_logo_path'])); ?>"
                    class="h-20 border rounded-xl -translate-y-14" alt=""></a>
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <?php if($footerSettings->enable_links): ?>
                                <h3 class="text-lg font-semibold leading-6 text-white mt-5"><?php echo e('COMPANY'); ?></h3>


                                <ul role="list" class="mt-6 space-y-4">
                                    <?php $__currentLoopData = $footerSettings->footer_links; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $footerLink): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php if($footerLink[2]): ?>
                                            <li class="cursor-pointer pt-4 lg:py-0">
                                                <a href="<?php echo e($footerLink[1]); ?>"
                                                    class="focus:outline-none focus:underline hover:underline text-base text-white opacity-80"><?php echo e($footerLink[0]); ?></a>
                                            </li>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                                </ul>
                            <?php endif; ?>

                        </div>
                        <div class="mt-10 md:mt-0">
                            
                            <h3 class="text-lg font-semibold leading-6 text-white mt-5 ">
                                 <?php echo e('COURSES'); ?>

                            </h3>

                            <ul role="list" class="mt-6 space-y-4">
                                
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('TS BOARD'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('AP BOARD'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('CBSE (NCERT)'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('IIT Foundation'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('JEE (Mains/Advanced)'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('NEET'); ?>

                                    </a>
                                </li>
                                
                            </ul>
                            
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            
                            <h3 class="text-lg font-semibold leading-6 text-white mt-5">
                                 <?php echo e('CLASSES'); ?>

                            </h3>

                            <ul role="list" class="mt-6 space-y-4">
                                
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('Class 6th - 10th'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('Class 11th -12th'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('Coding for Kids'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('AI , ROBOTICS'); ?>

                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-sm leading-6 text-gray-300 hover:text-white ">
                                         <?php echo e('Web, Mobile App for Kids'); ?>

                                    </a>
                                </li>
                                
                            </ul>
                            
                        </div>
                        <div class="mt-10 md:mt-0">

                        </div>
                    </div>
                </div>
                <div class="mt-10 xl:mt-0">
                    <h3 class="text-lg font-semibold leading-6 text-white ">Subscribe to our newsletter</h3>
                    <p class="mt-2 text-sm leading-6 text-gray-300">The latest news, articles, and resources, sent to
                        your
                        inbox weekly.</p>
                    <form class="mt-6 sm:flex sm:max-w-md">
                        <label for="email-address" class="sr-only">Email address</label>
                        <input type="email" name="email-address" id="email-address" autocomplete="email" required
                            class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Enter your email">
                        <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                            <button type="submit"
                                class="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                class="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
                <div class="flex space-x-6 md:order-2">
                    <?php $__currentLoopData = $footerSettings->social_links; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $socialLink): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php if($socialLink[1]): ?>
                            <a href="<?php echo e($socialLink[2]); ?>" target="_blank" class="text-gray-500 hover:text-gray-400">
                                <span class="sr-only"><?php echo e($socialLink[0]); ?></span>
                                <?php if($key == 'facebook'): ?>
                                    <svg class="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Facebook</title>
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                <?php endif; ?>
                                <?php if($key == 'twitter'): ?>
                                    <svg class="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Twitter</title>
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                <?php endif; ?>
                                <?php if($key == 'instagram'): ?>
                                    <svg class="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Instagram</title>
                                        <path
                                            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                <?php endif; ?>
                                <?php if($key == 'youtube'): ?>
                                    <svg class="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>YouTube</title>
                                        <path
                                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                <?php endif; ?>
                                <?php if($key == 'linkedin'): ?>
                                    <svg class="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>LinkedIn</title>
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                <?php endif; ?>
                                <?php if($key == 'github'): ?>
                                    <svg class="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>GitHub</title>
                                        <path
                                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                <?php endif; ?>
                            </a>
                        <?php endif; ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
                <p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">&copy; <?php echo e(now()->format('Y')); ?>

                    
                    <?php echo e(config('app.name')); ?> All
                    rights reserved.</p>
            </div>
        </div>
    </footer>
<?php endif; ?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js"
    integrity="sha512-u3fPA7V8qQmhBPNT5quvaXVa1mnnLSXUep5PS1qo5NRzHwG19aHmNJnj1Q8hpA/nBWZtZD4r4AX6YOt5ynLN2g=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>


</html>

<style>
    i.fas.fa-telugu::before,
    i.fa.fa-telugu::before {
        content: '\0C05';
        font-size: 1.2em;
    }

    i.fas.fa-hindi::before,
    i.fa.fa-hindi::before {
        content: '\0905';
        font-size: 1.2em;
    }
</style>
<style>
    .white-img-filter-hover:hover img {
        filter: invert(95%) sepia(100%) saturate(14%) hue-rotate(213deg) brightness(104%) contrast(104%);
    }


    .primary-img img {
        filter: invert(34%) sepia(94%) saturate(4930%) hue-rotate(338deg) brightness(91%) contrast(83%);
    }
</style>
<?php /**PATH C:\xampp\htdocs\resources\views/components/footer.blade.php ENDPATH**/ ?>