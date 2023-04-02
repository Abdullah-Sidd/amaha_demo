import React from 'react'

function Testimonial() {
    return (
        <>
            <section class="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-10 lg:px-8">
                <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div class="mx-auto max-w-2xl lg:max-w-4xl">
                    <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“We’ve helped
millions feel better.”<span>  Now it’s your turn to benefit from the ‘Amaha experience’...</span></p>
                        </blockquote>
                        <figcaption class="mt-10">
                            <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div class="font-semibold text-gray-900">- Anonymous</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="text-gray-600"> Cabin Crew, Delhi</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
            <div class="bg-white py-10 sm:py-10">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">inhouse therapists and psychiatrists</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">60 +</dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">lives impacted</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">4M +</dd>
                        </div>

                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">hours in therapy &
psychiatry</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">50K +</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div class="bg-white py-12 sm:py-12">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 class="text-center text-3xl pb-2 font-semibold leading-8 text-gray-700">Trusted by the world’s most innovative teams</h1>
                    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
                        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial