{{-- <section class="border-b border-gray-100">

    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-base text-secondary font-semibold tracking-wide uppercase">{{ __('Testimonials') }}</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                {{ $title }}
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {{ $subtitle }}
            </p>
        </div>
        <div class="w-full lg:flex items-center gap-6 mt-10">
            @foreach ([1, 2] as $i)
                <div class="lg:w-1/2 mt-10 lg:mt-0">
                    <div class="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
                        <div class="text-primary">
                            <svg class="rtl:flip" width="25" height="27" viewBox="0 0 25 27" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M24.5767 14.331H18.6157C18.7176 9.55831 19.9498 9.01654 21.4974 8.86191L22.0942 8.78063V3.53254L21.4063 3.57304C19.3854 3.69795 17.1512 4.09818 15.6605 6.11977C14.3539 7.89195 13.7778 10.7872 13.7778 15.2317V23.4674H24.5767V14.331Z"
                                        fill="currentColor" />
                                    <path
                                        d="M10.7988 23.4674V14.331H4.91744C5.01934 9.55831 6.21168 9.01654 7.75927 8.86191L8.31634 8.78063V3.53254L7.66816 3.57304C5.64729 3.69795 3.39306 4.09818 1.90245 6.11977C0.595916 7.89195 -5.72205e-06 10.7872 -5.72205e-06 15.2317V23.4674H10.7988Z"
                                        fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24.5767" height="27" fill="white"
                                            transform="translate(24.5767 27) rotate(-180)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p class="text-base leading-6 text-gray-600 mt-4">{{ ${'testimonial' . $i}[2] }}</p>
                        <div class="absolute bottom-0 -mb-4 ml-10">
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" width="20" height="21" fill="white" />
                                <path d="M21.5 6L11.5 21L1 6" stroke="#E5E7EB" stroke-linecap="square"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center mt-7">
                        <div class="w-12 h-12 border border-primary rounded-full flex items-center justify-center">
                            <img src="{{ ${'testimonial' . $i}[3] }}" class="w-10 h-10 rounded-full"
                                alt="{{ ${'testimonial' . $i}[0] }}" />
                        </div>
                        <div class="flex flex-col items-start ltr:ml-4 rtl:mr-4">
                            <p class="text-base font-semibold leading-4 text-gray-800">{{ ${'testimonial' . $i}[0] }}</p>
                            <p class="text-base leading-4 mt-2 text-center text-gray-600">{{ ${'testimonial' . $i}[1] }}
                            </p>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section> --}}

<div class="background-image bg-cover bg-center bg-no-repeat">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:justify-between">
            <div class="lg:w-1/2 text-left lg:text-left mb-12 lg:mb-0 mt-40">
                <img class="-mt-20"
                    src="https://prepmaster.in/wp-content/uploads/2021/01/home-online-art-testimonial-image.png"
                    alt="">
                <h2 class="text-2xl text-secondary font-semibold tracking-wide mt-5 uppercase">{{ __('Testimonials') }}
                </h2>
                <h1 class="text-5xl font-bold text-primary mb-4">{{ $title }}</h1>
                <p class="text-gray-600 mb-6">{{ $subtitle }}</p>
                <a href="{{ route('register') }}">
                    <button class="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-secondary">
                        Register Free Account!
                    </button>
                </a>
            </div>

            <div class="lg:w-2/6 relative testimonial-container">
                @foreach ([1, 2] as $i)
                    <div class="absolute inset-0 bg-white shadow-lg rounded-lg p-6 text-center card card-test transition-opacity duration-300 ease-in-out"
                        style="z-index: {{ 10 - $i }};">
                        <div class="card-image">
                            <img class="w-full h-full object-cover" src="{{ ${'testimonial' . $i}[3] }}"
                                alt="{{ ${'testimonial' . $i}[3] }}" role="img">
                        </div>
                        <div class="mt-10">
                            <h2 class="text-base font-semibold text-primary mb-2">{{ ${'testimonial' . $i}[2] }}</h2>
                        </div>
                        <div class="mt-10">
                            <p class="text-base font-semibold leading-4 text-gray-800">{{ ${'testimonial' . $i}[0] }}
                            </p>
                            <p class="text-base leading-4 mt-2 text-center text-gray-600">{{ ${'testimonial' . $i}[1] }}
                            </p>
                        </div>
                    </div>
                @endforeach
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
