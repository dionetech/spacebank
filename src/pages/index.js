import Header from "../layout/Header";
import Page from "../layout/Page";
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../components/page/LandingPage'), {
	suspense: true,
})

const Home = () => {

	return (
		<>
			<Header />
			<Page>
				<LandingPage />
			</Page>
		</>
	)
}

export default Home;