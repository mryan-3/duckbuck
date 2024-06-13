import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card'

type DistCardProps = {
	title: string
	body: string
	extra: string
    color: string
}

export default function DistCard({ title, body, extra,color }: DistCardProps) {
	return (
		<Card className={`border-l-[5px] bg-purple-600/10`} style={{borderColor:color}}>
			<CardHeader className='pb-2'>
				<CardDescription className='text-gray-200 font-semibold text-[1.1rem]'>{title}</CardDescription>
				<CardTitle className='bg-gradient-to-r from-purple-300 text-5xl from-10% to-purple-500 bg-clip-text text-transparent'>{body}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='text-xs text-gray-300'>{extra}</div>
			</CardContent>
		</Card>
	)
}
