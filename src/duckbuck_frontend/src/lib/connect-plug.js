import { toast } from 'sonner'

const PlugConnect = async () => {
	try {
		if (
			typeof window.ic !== 'undefined' &&
			typeof window.ic.plug !== 'undefined'
		) {
			const plug = window.ic.plug

			const connected = await plug.requestConnect({
				whitelist: [
					'jklxs-eyaaa-aaaam-ac25a-cai',
					'y5yya-zqaaa-aaaam-acsea-cai'
				]
			})

			// Frontend canister ID = y5yya-zqaaa-aaaam-acsea-cai
			// Token canister ID = jklxs-eyaaa-aaaam-ac25a-cai

			if (connected) {
				toast.success('Plug wallet connected successfully')
				const principal = await plug.getPrincipal()

				function shortenPrincipal(principalId) {
					const principalStr = principalId.toText()
					if (principalStr.length <= 6) {
						return principalStr // If the ID is too short, return it as is.
					}
					const start = principalStr.slice(0, 3)
					const end = principalStr.slice(-3)
					return `${start}...${end}`
				}

				const newPrin = shortenPrincipal(principal)
				setShow(newPrin)
			}
		} else {
			toast.error('Plug wallet not found')
		}
	} catch (error) {
		console.log('Could not connect to wallet')
	}
}

export default PlugConnect
