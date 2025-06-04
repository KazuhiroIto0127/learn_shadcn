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

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col">
        {/* Header with navigation and theme toggle */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="font-semibold text-lg">shadcn/ui Demo</div>
              <MainNavigation />
            </div>
            <ModeToggle />
          </div>
        </header>        
        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">Welcome to shadcn/ui Demo</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This is a demonstration of shadcn/ui components with dark mode support.
              Try clicking the button below to see a dialog in action.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
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
      </div>
    </ThemeProvider>
  )
}

export default App
