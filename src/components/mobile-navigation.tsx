import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs", description: "Re-usable components built using Radix UI and Tailwind CSS." },
      { title: "Installation", href: "/docs/installation", description: "How to install dependencies and structure your app." },
      { title: "Typography", href: "/docs/primitives/typography", description: "Styles for headings, paragraphs, lists...etc" },
    ]
  },
  {
    title: "Components",
    items: [
      { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user." },
      { title: "Button", href: "/docs/primitives/button", description: "Displays a button or a component that looks like a button." },
      { title: "Dialog", href: "/docs/primitives/dialog", description: "A window overlaid on either the primary window." },
      { title: "Navigation Menu", href: "/docs/primitives/navigation-menu", description: "A collection of links for navigating websites." },
    ]
  }
]

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Browse through our components and documentation.
          </SheetDescription>
        </SheetHeader>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-6">
            {navigationItems.map((section) => (
              <div key={section.title}>
                <h4 className="mb-3 text-sm font-semibold">{section.title}</h4>
                <div className="grid gap-2">
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => setOpen(false)}
                    >
                      <div className="text-sm font-medium leading-none">
                        {item.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <a
                href="/docs"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                <div className="text-sm font-medium leading-none">
                  Documentation
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Complete documentation for all components.
                </p>
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
