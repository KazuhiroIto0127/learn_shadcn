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

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col">
        {/* Header with theme toggle */}
        <header className="p-4 flex justify-end">
          <ModeToggle />
        </header>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Click me</Button>
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
      </div>
    </ThemeProvider>
  )
}

export default App
