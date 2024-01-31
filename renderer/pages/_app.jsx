import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { ThemeProvider } from "next-themes";
import { MainLayout } from "../components/layouts";
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
		<ThemeProvider attribute="class">
			<Theme>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</Theme>
		</ThemeProvider>
  )
}