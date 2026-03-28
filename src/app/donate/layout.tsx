import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Donate',
	description:
		'Support KakituDrop by making a donation in Kakitu. Your contributions help us maintain a fee-less, instant, and scalable Kakitu cryptocurrency faucet.',
}

export default function DonateLayout({ children }: { children: ReactNode }) {
	return children
}
