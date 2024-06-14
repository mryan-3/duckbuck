import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type TMarkdownRendererProps = {
	content: string
}

export default function MarkdownRenderer({ content }: TMarkdownRendererProps) {
	return (
		<ReactMarkdown
			className='prose'
			components={{
				h1: ({ node, ...props }) => (
					<h1 className='mb-4 text-3xl font-semibold text-white' {...props} />
				),
				h2: ({ node, ...props }) => (
					<h2 className='mb-4 text-2xl font-semibold text-white' {...props} />
				),
				h3: ({ node, ...props }) => (
					<h3 className='mb-4 text-xl font-semibold text-white' {...props} />
				),
				h4: ({ node, ...props }) => (
					<h4 className='mb-4 text-lg font-semibold text-white' {...props} />
				),
				p: ({ node, ...props }) => (
					<p className='mb-2 leading-relaxed text-gray-300' {...props} />
				),
                ul: ({ node, ...props }) => (
                    <ul className='list-disc list-inside text-gray-300' {...props} />
                ),
                li: ({ node, ...props }) => (
                    <li className='mb-2 text-gray-300' {...props} />
                ),
				a: ({ node, ...props }) => (
					<a
						className='text-gray-200 hover:text-gray-200 hover:underline'
						target='_blank'
						rel='noopener noreferrer'
						{...props}
					/>
				),
                strong: ({ node, ...props }) => (
                    <strong className='font-semibold text-gray-200' {...props} />
                ),
				code: ({ className, children, ...props }) => {
					const match = /language-(\w+)/.exec(className || '')
					return match ? (
						<SyntaxHighlighter language={match[1]} style={tomorrow}>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					)
				}
			}}
			remarkPlugins={[remarkGfm]}
		>
			{content}
		</ReactMarkdown>
	)
}
