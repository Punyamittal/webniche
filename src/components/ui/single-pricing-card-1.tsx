'use client';

import { Link } from 'react-router-dom';
import { PlusIcon, ShieldCheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './badge';
import { Button } from './button';
import { cn } from '../../lib/utils';
import { BorderTrail } from './border-trail';

export function SinglePricingCard() {
	return (
		<section className="relative min-h-screen overflow-hidden py-24 bg-[#141414] text-white">
			<div id="pricing" className="mx-auto w-full max-w-6xl space-y-5 px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true }}
					className="mx-auto max-w-xl space-y-5"
				>
					<div className="flex justify-center">
						<div className="rounded-lg border border-white/20 px-4 py-1 font-mono text-white">Pricing</div>
					</div>
					<h2 className="mt-5 text-center text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-white">
						Pricing Based on Your Success
					</h2>
					<p className="text-white/70 mt-5 text-center text-sm md:text-base">
						We offer a single price for all our services. We believe that pricing is a critical component of any
						successful business.
					</p>
				</motion.div>
				<div className="relative">
					<div
						className={cn(
							'z-[-10] pointer-events-none absolute inset-0 size-full',
							'bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]',
							'bg-[size:32px_32px]',
							'[mask-image:radial-gradient(ellipse_at_center,var(--background)_10%,transparent)]',
						)}
					/>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="mx-auto w-full max-w-2xl space-y-2"
					>	
						<div className="grid md:grid-cols-2 bg-[#1a1a1a] relative border border-white/20 p-4">
							<PlusIcon className="absolute -top-3 -left-3 size-5" />
							<PlusIcon className="absolute -top-3 -right-3 size-5" />
							<PlusIcon className="absolute -bottom-3 -left-3 size-5" />
							<PlusIcon className="absolute -right-3 -bottom-3 size-5" />
							<div className="w-full px-4 pt-5 pb-4">
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<h3 className="leading-none font-semibold text-white">Student</h3>
										<div className="flex items-center gap-x-1">
											<span className="text-white/60 text-sm line-through">₹599</span>
											<Badge variant="secondary">50% off</Badge>
										</div>
									</div>
									<p className="text-white/70 text-sm">Perfect for students and recent graduates!</p>
								</div>
								<div className="mt-10 space-y-4">
									<div className="text-white/70 flex items-end gap-0.5 text-xl">
										<span>₹</span>
										<span className="text-white -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
											299
										</span>
										<span>/one-time</span>
									</div>
									<Button className="w-full" variant="outline" asChild>
										<Link to="/contact">Start Your Journey</Link>
									</Button>
								</div>
							</div>
							<div className="relative w-full rounded-lg border border-white/20 px-4 pt-5 pb-4">
								<BorderTrail
									style={{
										boxShadow:
											'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
									}}
									size={100}
								/>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<h3 className="leading-none font-semibold text-white">Professional</h3>
										<div className="flex items-center gap-x-1">
											<span className="text-white/60 text-sm line-through">₹999</span>
											<Badge>40% off</Badge>
										</div>
									</div>
									<p className="text-white/70 text-sm">Ideal for working professionals and freelancers!</p>
								</div>
								<div className="mt-10 space-y-4">
									<div className="text-white/70 flex items-end text-xl">
										<span>₹</span>
										<span className="text-white -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
											599
										</span>
										<span>/one-time</span>
									</div>
									<Button className="w-full" asChild>
										<Link to="/contact">Get Started Now</Link>
									</Button>
								</div>
							</div>
						</div>
						<div className="text-white/70 flex items-center justify-center gap-x-2 text-sm">
							<ShieldCheckIcon className="size-4" />
							<span>Access to all features with no hidden fees</span>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

