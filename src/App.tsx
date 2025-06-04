import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
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
  )
}

export default App
