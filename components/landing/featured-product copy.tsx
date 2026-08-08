import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/shared/section";

export function FeaturedProduct() {
  return (
    <Section title="Featured Product">
      <Card className="rounded-2xl border-blue-200 dark:border-blue-900">
        <CardContent className="p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            School ERP
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            Complete School Automation Platform
          </h3>

          <p className="mt-6 text-lg text-muted-foreground">
            A modern cloud-based school management system designed to simplify
            administration, improve communication and automate daily operations
            for educational institutions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border p-5">
              <h4 className="font-semibold">RFID Attendance</h4>

              <p className="mt-2 text-sm text-muted-foreground">
                Automatic student attendance using RFID technology.
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h4 className="font-semibold">Parent Notifications</h4>

              <p className="mt-2 text-sm text-muted-foreground">
                Instant SMS and app notifications for parents.
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h4 className="font-semibold">Complete ERP</h4>

              <p className="mt-2 text-sm text-muted-foreground">
                Admissions, Fees, Timetable, Exams, Payroll and much more.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
