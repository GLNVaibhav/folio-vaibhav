export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          🚧 Currently Building
        </h2>

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
          Building impactful solutions at the intersection of Healthcare, AI, and Business.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold mb-2">
              BeyondBreathe
            </h3>
            <p className="text-muted-foreground">
              AI-powered healthcare ecosystem integrating emergency response,
              blood donation networks, patient health records, and insurance services.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold mb-2">
              Customer Churn Prediction
            </h3>
            <p className="text-muted-foreground">
              Ongoing machine learning research internship focused on customer
              retention analytics and predictive modeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
