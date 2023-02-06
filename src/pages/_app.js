import '@/styles/bootstrap.css';
import 'aos/dist/aos.css';
import '@/styles/globals.css';
import '@/styles/media.css';
import Aos from "aos";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

	useEffect(() => {
		Aos.init({
			duration: "1200"
		})
	}, [])

  return <Component {...pageProps} />
}

export default MyApp;