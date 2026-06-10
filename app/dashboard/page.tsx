import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default async function LeadsDashboardPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Collected Leads</CardTitle>
          <p className="text-muted-foreground">This dashboard is for demonstration purposes.</p>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
            <p className="text-lg font-semibold">No Database Connected</p>
            <p>Lead data is not being stored as Supabase integration is currently disabled.</p>
            <p className="mt-2 text-sm">Form submissions will be simulated.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
