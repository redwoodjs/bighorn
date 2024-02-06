import { useEffect, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

import EventItem from 'src/components/EventItem/EventItem'

import data from '$content/Events/_index.json'
import { Events } from '$content/types.d'

const EventSummary = () => {
  const [events, setEvents] = useState<Events[]>([])

  // order events by date
  useEffect(() => {
    const ordered = data.sort((a: Events, b: Events) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    setEvents(ordered)
  }, [])

  return (
    <section className="page-grid px-page">
      <div className="col-span-5">
        <div className="sticky top-5">
          <h2 className="section-heading mb-6">Upcoming Events</h2>
          <h3 className="section-subheading mb-6">
            Join us in person and online.
          </h3>
          <p>
            <Link
              to={routes.events()}
              className="font-white border-b-2 border-b-white text-lg hover:border-b-sulu"
            >
              View the Entire Calendar.
            </Link>
          </p>
        </div>
      </div>

      <div className="col-span-7 flex flex-col gap-[72px] pt-10">
        {events?.map((item: Events, index: number) => (
          <EventItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            rsvp={item.rsvp}
          />
        ))}
      </div>
    </section>
  )
}

export default EventSummary
