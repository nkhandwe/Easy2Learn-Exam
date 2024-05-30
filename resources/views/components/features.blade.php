<div class="h-20 bg-white"></div>
<div class="h-20 bg-white"></div>
<div class="h-20 bg-white"></div>
<!-- Main container with background image -->
<div class="background-image bg-cover bg-center bg-no-repeat">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:justify-between">
            <!-- Title and Description Section -->
            <div class="lg:w-1/2 text-left lg:text-left mb-12 lg:mb-0 mt-40">
                <h2 class="text-2xl text-secondary font-semibold tracking-wide uppercase">{{ __('Features') }}</h2>
                <h1 class="text-5xl font-bold text-primary mb-4"> {{ $title }}</h1>
                <p class="text-gray-600 mb-6">
                    {{ $subtitle }}
                </p>
                <a href="{{ route('register') }}">
                    <button class="bg-primary text-white py-2 px-6 rounded-full shadow-lg hover:bg-secondary">
                        Register Free Account!
                    </button>
                </a>
            </div>

            <!-- Features Section -->
            <div class="lg:w-2/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <!-- Feature Cards -->
                @foreach ([1, 2, 3, 4] as $i)
                    <div class="bg-white shadow-lg rounded-lg p-6 text-center card">
                        <div class="card-image">
                            <img class="w-full h-full object-cover" src="{{ ${'feature' . $i}[2] }}"
                                alt="{{ ${'feature' . $i}[0] }}" role="img">
                        </div>
                        <div class="mt-10">
                            <h2 class="text-xl font-semibold text-purple-700 mb-2">{{ ${'feature' . $i}[0] }}</h2>
                        </div>
                        <div class="mt-10">
                            <p class="text-gray-600">{{ ${'feature' . $i}[1] }}</p>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>

{{--
<section class="border-b border-gray-100 mt-28">

    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-base text-secondary font-semibold tracking-wide uppercase">{{ __('Features') }}</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                {{ $title }}
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {{ $subtitle }}
            </p>
        </div>
        <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                @foreach ([1, 2, 3, 4] as $i)
                    <div class="relative">
                        <dt>
                            <img class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white"
                                src="{{ ${'feature' . $i}[2] }}" alt="{{ ${'feature' . $i}[0] }}" role="img" />
                            <p class="ltr:ml-16 rtl:mr-16 text-lg leading-6 font-medium text-gray-900">
                                {{ ${'feature' . $i}[0] }}</p>
                        </dt>
                        <dd class="mt-2 ltr:ml-16 rtl:mr-16 text-base text-gray-500">
                            {{ ${'feature' . $i}[1] }}
                        </dd>
                    </div>
                @endforeach
            </dl>
        </div>
    </div>
</section> --}}
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
