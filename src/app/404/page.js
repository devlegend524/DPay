import React from 'react'

export default function Error() {
  return (
    <section className="relative bg-violet-600/5">
			<div className="container-fluid relative">
					<div className="grid grid-cols-1">
							<div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
									<div className="text-center">
											<img src="/assets/images/logo-icon-64.png" className="mx-auto" alt=""/>
									</div>
									<div className="title-heading text-center my-auto">
											<div className="md:my-0 my-10">
													<img src="/assets/images/error.png" className="mx-auto" alt=""/>
													<h1 className="my-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
													<p className="text-slate-400">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasn't found.</p>
													
													<div className="mt-6">
															<a href="index.html" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Back to Home</a>
													</div>
											</div>
									</div>
									<div className="text-center">
											<p className="mb-0 text-slate-400">© <script>document.write(new Date().getFullYear())</script> Giglink. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="../../shreethemes_default.html" target="_blank" className="text-reset">Shreethemes</a>.</p>
									</div>
							</div>
					</div>
			</div>
        </section>
  )
}
