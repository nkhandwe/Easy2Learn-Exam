<!DOCTYPE html>
<html dir="<?php echo e(app(\App\Settings\LocalizationSettings::class)->default_direction); ?>"
    lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title><?php echo e(config('app.name', 'QwikTest')); ?></title>
    <meta name="description" content="<?php echo e(app(\App\Settings\SiteSettings::class)->seo_description); ?>">
    <link rel="icon" href="<?php echo e(url('storage/' . app(\App\Settings\SiteSettings::class)->favicon_path)); ?>">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="<?php echo e(config('qwiktest.default_font_url')); ?>">

    <!-- Styles -->
    <link rel="stylesheet" href="<?php echo e(asset('vendor/primeicons/primeicons.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('vendor/nprogress/nprogress.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('vendor/katex/katex.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('css/app.css')); ?>">
    <link rel="stylesheet" defer href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>

    </script>


    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <style>
        :root {
            /* Custom Theme Configuration */
            --custom-font: "<?php echo e(config('qwiktest.default_font')); ?>";
            --primary-color: <?php echo e('#' . app(\App\Settings\ThemeSettings::class)->primary_color); ?>;
            --secondary-color: <?php echo e('#' . app(\App\Settings\ThemeSettings::class)->secondary_color); ?>;
        }
    </style>

    <!-- Scripts -->
    <?php echo app('Tightenco\Ziggy\BladeRouteGenerator')->generate(); ?>
    <script>
        window.CKEditorURL = "<?php echo e(asset('vendor/ckeditor/ckeditor.js')); ?>";
    </script>
    <script src="<?php echo e(asset('vendor/katex/katex.min.js')); ?>"></script>
    <script src="<?php echo e(asset('vendor/katex/contrib/auto-render.min.js')); ?>"></script>
    <script src="<?php echo e(asset('js/manifest.js')); ?>" defer></script>
    <script src="<?php echo e(asset('js/vendor-vue.js')); ?>" defer></script>
    <script src="<?php echo e(asset('js/vendor.js')); ?>" defer></script>
    <script src="<?php echo e(asset('js/app.js')); ?>" defer></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        dark: "#3C3C3C",
                        primary: "#D63548",
                        secondary: "#F7F1E5",
                        white: "#fff",
                        gray: {
                            100: "#fff"
                        }
                    },
                    maxWidth: {
                        '8xl': '84rem',
                        'responsive': '80vw'
                    },
                    borderRadius: {
                        '5xl': '4rem'
                    },
                    spacing: {
                        '128': '32rem',
                    },
                    rotate: {
                        '360': '360deg',
                    },
                    zIndex: {
                        '100': '100',
                    }


                },
                letterSpacing: {
                    'widest-xl': '0.35em'
                }

            }
        }
    </script>
</head>

<body class="font-sans antialiased bg-gray-100 dark:bg-gray-900">
    <div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div>
</body>

</html>
<?php /**PATH C:\xampp\htdocs\resources\views/app.blade.php ENDPATH**/ ?>