<section class="hero-gradient dark:bg-gray-900 border-b border-gray-100 lg:px-4 xl:px-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <video class="background-video" autoplay muted loop playsinline>
            <source src="https://www.tcyonline.info/india/content/Success_video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <!-- Overlay for darkening the video -->
        <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row">
            {{-- <div class="overlay"></div> --}}
            <div class="flex flex-col lg:w-6/12 md:w-6/12 px-4 lg:px-0 justify-center py-12 sm:py-36">
                <h1
                    class="text-5xl sm:text-5xl md:text-4xl lg:text-5xl font-bold leading-tight text-white dark:text-white">
                    {!! $title !!}</h1>
                <p class="text-lg text-white font-light leading-relaxed pt-8 xl:hidden block">{!! $subtitle !!}
                </p>
                <p class="text-lg text-white font-light leading-relaxed pt-8 xl:block hidden w-4/5">
                    {!! $subtitle !!}
                </p>

                <div class="mt-12 flex flex-wrap">
                    <div class="ltr:mr-6 rtl:ml-6 mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                        <a href="{{ $cta_link }}"
                            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-primary bg-primary transition duration-150 ease-in-out hover:opacity-90 rounded text-white px-6 py-4 text-lg">
                            {{ $cta_text }}
                        </a>
                    </div>
                </div>
            </div>
            {{-- <div
                class="hidden mt-6 md:mt-0 h-96 md:h-auto md:w-1/2 relative lg:mt-0 ltr:pl-6 rtl:pr-6 sm:ltr:pl-20 sm:rtl:pl-20 sm:flex justify-end sm:block">
                <div class="w-5/6 h-full">
                    <img class="inset-0 absolute object-contain object-bottom z-10 w-auto h-full pt-10"
                        src="{{ asset('storage/' . $image_path) }}" alt="Hero Image" role="img" />
                </div>
            </div> --}}
        </div>
        <div class="md:-translate-x-1/2 z-40 md:absolute">
            <div class="bg-white  max-w-7xl rounded-xl mx-auto md:p-6 p-3 px-6 -mt-20  shadow-lg shadow-gray-200">
                <span class="bg-yellow-300 rounded-full p-2 px-4 font-semibold">Popular Courses</span>
                <div class="swiper-container overflow-hidden">
                    <div class="flex swiper-wrapper popular-courses gap-6 mt-5 pr-44 mr-20 ">
                        <div class="bg-yellow-100 p-5  rounded-lg   swiper-slide  border-b-4 border-yellow-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 font-semibold text-yellow-600/100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            <h5 class="mt-2 flex w-full justify-between items-center">
                                <span>
                                    TS BOARD <br>
                                    Class 6th-10th
                                </span>

                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </span>
                            </h5>

                        </div>
                        <div class="bg-yellow-100 p-5  rounded-lg   swiper-slide  border-b-4 border-yellow-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 font-semibold text-yellow-600/100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            <h5 class="mt-2 flex w-full justify-between items-center">
                                <span>
                                    TS BOARD <br>
                                    Class 6th-10th
                                </span>

                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </span>
                            </h5>

                        </div>
                        <div class="bg-yellow-100 p-5  rounded-lg   swiper-slide  border-b-4 border-yellow-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 font-semibold text-yellow-600/100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            <h5 class="mt-2 flex w-full justify-between items-center">
                                <span>
                                    TS BOARD <br>
                                    Class 6th-10th
                                </span>

                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </span>
                            </h5>

                        </div>
                        <div class="bg-yellow-100 p-5  rounded-lg   swiper-slide  border-b-4 border-yellow-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 font-semibold text-yellow-600/100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            <h5 class="mt-2 flex w-full justify-between items-center">
                                <span>
                                    TS BOARD <br>
                                    Class 6th-10th
                                </span>

                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </span>
                            </h5>

                        </div>
                        <div class="bg-red-100 p-5  rounded-lg   swiper-slide  border-b-4 border-red-600 ">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 font-semibold text-red-600/100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            <h5 class="mt-2 flex w-full justify-between items-center">
                                <span>
                                    AP BOARD <br> Class 6th-10th
                                </span>

                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </span>
                            </h5>

                        </div>
                        <div class="bg-blue-100 p-5  rounded-lg   swiper-slide  border-b-4 border-blue-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 font-semibold text-blue-600/100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            <h5 class="mt-2 flex w-full justify-between items-center">
                                <span>
                                    CBSE <br> Class 6th-10th
                                </span>

                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </span>
                            </h5>

                        </div>
                        <div class="bg-green-100 p-5  rounded-lg   swiper-slide  border-b-4 border-green-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 font-semibold text-green-600/100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            <h5 class="mt-2 flex w-full justify-between items-center">
                                <span>
                                    IIT JEE(Mains/<br> Advanced)
                                </span>

                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </span>
                            </h5>

                        </div>
                        <div class="bg-pink-100 p-5  rounded-lg  swiper-slide  border-b-4 border-pink-600">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-7 h-7 font-semibold text-pink-600/100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            <h5 class="mt-2 flex w-full justify-between items-center">
                                <span>
                                    Coding <br>(Robotics/AI)
                                </span>

                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </span>
                            </h5>

                        </div>
                        <div class="swiper-slide">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <!-- Add navigation buttons -->
                    <div
                        class="swiper-button-next text-primary  md:-translate-y-14 bg-primary/10 z-50  md:-translate-x-5 ">
                    </div>
                    <div
                        class="swiper-button-prev text-primary md:-translate-y-14 bg-primary/10 z-50  md:-translate-x-5 ">
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

@push('styles')
    <style>
        .background-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        .content {
            position: relative;
            z-index: 10;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            /* Adjust overlay color and opacity as needed */
            z-index: 5;
        }

        .hero-gradient {
            background-image: linear-gradient(rgba(255, 255, 255, 0) 0%, {{ hex2rgba('#' . app(\App\Settings\ThemeSettings::class)->primary_color, 0.03) }} 100%);
            background-repeat: no-repeat;
        }

        .swiper-button-prev {
            border-radius: 50%;
            cursor: pointer;
            height: 30px;
            left: auto;
            opacity: 1;
            padding: 10px;
            right: 45px !important;
            width: 30px;
            position: absolute;
        }

        .swiper-button-next {
            border-radius: 50%;
            cursor: pointer;
            height: 30px;
            opacity: 1;
            padding: 10px;
            right: 0;
            width: 30px;
        }



        .swiper-button-prev:after,
        .swiper-button-next:after {
            font-size: 14px;
        }

        .swiper-slide .card.active,
        .swiper-slide .card.active .card-title {
            color: white !important;
            background-color: var(--bs-primary) !important;
        }
    </style>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.popular-courses').each(function() {
                var container = $(this);
                var content = container.find('h5');

                if (content[0].scrollWidth > content.outerWidth()) {
                    // Content overflows, add right icon and make it scrollable
                    container.append('<span class="overflow-icon">&rarr;</span>');
                    content.addClass('scrollable');
                }
            });
        });
        var swiper; // Declare swiper as a global variable

        function initSwiper() {
            swiper = new Swiper('.swiper-container', {
                // Enable swipe navigation
                direction: 'horizontal',
                spaceBetween: 5,

                // Enable pagination
                pagination: {
                    clickable: true,
                },

                // Enable navigation buttons
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }

        function updateSwiper() {
            var screenWidth = $(window).width();

            // Change slidesPerView based on screen width
            if (screenWidth >= 768) {
                swiper.params.slidesPerView = 6;
            } else if (screenWidth >= 576) {
                swiper.params.slidesPerView = 3;
            } else {
                swiper.params.slidesPerView = 2;
            }

            swiper.update(); // Update Swiper after changing parameters
        }

        $(document).ready(function() {
            initSwiper();
            updateSwiper();

            $(window).resize(function() {
                updateSwiper();
            });
        });
    </script>
@endpush
