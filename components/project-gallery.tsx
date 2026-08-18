"use client"

const projects = [
  {
    src: "/projects/paver-patio.png",
    title: "Paver patio & driveway",
    location: "Los Angeles, CA",
  },
  {
    src: "/projects/retaining-wall.png",
    title: "Stacked-stone retaining wall",
    location: "Fresno, CA",
  },
  {
    src: "/projects/outdoor-kitchen.png",
    title: "Outdoor kitchen & fire pit",
    location: "San Diego, CA",
  },
  {
    src: "/projects/pool-waterfeature.png",
    title: "Pool & water feature",
    location: "San Francisco, CA",
  },
  {
    src: "/projects/artificial-turf.png",
    title: "Artificial turf & planters",
    location: "Sacramento, CA",
  },
  {
    src: "/projects/garden-lighting.png",
    title: "Landscape lighting & planting",
    location: "Riverside, CA",
  },
]

export function ProjectGallery() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 text-balance">
            Recent projects across California
          </h2>
          <p className="text-lg text-slate-600 text-pretty">
            A look at the kind of work our licensed local crews deliver, from custom paver patios and retaining walls
            to complete backyard transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <figure
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-slate-200 shadow-sm"
            >
              <img
                src={project.src || "/placeholder.svg"}
                alt={`${project.title} in ${project.location}`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-base font-semibold text-white">{project.title}</p>
                <p className="text-sm text-slate-200">{project.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
