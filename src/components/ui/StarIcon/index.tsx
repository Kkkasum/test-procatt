export function StarIcon({
	width,
	height,
	color,
}: {
	width: number
	height: number
	color?: string
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill='none'
			viewBox='0 0 24 24'
		>
			<path
				fill='url(#stars)'
				d='M11.108 1.563a.988.988 0 0 1 1.784 0l2.748 5.451c.146.29.412.491.72.547l5.803 1.051c.799.145 1.116 1.166.55 1.775l-4.104 4.42c-.218.234-.32.561-.275.885l.838 6.1c.116.84-.715 1.472-1.442 1.098l-5.285-2.72a.968.968 0 0 0-.89 0L6.27 22.89c-.727.374-1.558-.258-1.443-1.097l.316-2.298c.002-.013.003-.026.006-.038.025-.16.265-1.33 2.136-3.022C8.6 15.245 12.35 13.08 14.8 11.72c.213-.119.062-.506-.169-.432-2.907.925-7.559 2.305-8.808 2.084-1.651-.292-2.72-1.098-2.936-1.273a.74.74 0 0 1-.077-.073l-1.523-1.64c-.565-.608-.248-1.63.551-1.774l5.803-1.05c.308-.057.574-.259.72-.548l2.748-5.451Z'
			/>
			<defs>
				<linearGradient
					id='stars'
					x1='16.666'
					x2='3.759'
					y1='7.604'
					y2='18.067'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={color ?? '#FECE55'} />
					<stop offset='1' stopColor={color ?? '#FBB23C'} />
				</linearGradient>
			</defs>
		</svg>
	)
}
