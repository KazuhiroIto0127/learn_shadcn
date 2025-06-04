import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNavigation } from "@/components/main-navigation"
import { MobileNavigation } from "@/components/mobile-navigation"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col">
        {/* Header with navigation and theme toggle */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-8">
              <MobileNavigation />
              <div className="font-semibold text-lg">shadcn/ui Demo</div>
              <div className="hidden md:flex">
                <MainNavigation />
              </div>
            </div>
            <ModeToggle />
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Welcome to shadcn/ui Demo</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              This is a demonstration of shadcn/ui components with dark mode support.
              Try clicking the button below to see a dialog in action.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-base px-8 py-3">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>shadcn/ui Dialog</DialogTitle>
                  <DialogDescription>
                    これはshadcn/uiのDialogコンポーネントです。ボタンをクリックして表示されました！
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    ここにモーダルの内容を追加できます。shadcn/uiを使うと、美しいUIコンポーネントを簡単に実装できます。
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t bg-background">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                  Built with{" "}
                  <a
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    shadcn/ui
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/shadcn-ui/ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/shadcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
