import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section shell">
          <div className="aboutIntro">
            <div className="eyebrow">About us</div>
            <h1>A small team with deep operational experience and a genuine love for helping brands grow.</h1>
            <p className="lede">
              We’re a team of eight people who have spent years working across shipping, operations,
              and technology. Our experience stretches from the Port of Oakland to big tech teams,
              and that combination gives us a rare perspective: we understand the pressure of moving
              product efficiently, the importance of reliability, and the reality that small businesses
              need a fulfillment partner who feels like a true extension of their team.
            </p>
          </div>

          <div className="aboutStory">
            <div className="aboutStoryCard">
              <h3>Built for the real world</h3>
              <p>
                We know what it takes to keep inventory moving, orders flowing, and customers happy.
                From warehouse operations to software workflows, we’ve spent the last decade learning how
                businesses succeed when systems are clean, communication is fast, and service is consistent.
                We built Octave Logistics to bring that experience to brands that want a hands-on partner,
                not a faceless 3PL that treats every client the same.
              </p>
            </div>

            <div className="aboutStoryCard">
              <h3>Why we do this</h3>
              <p>
                We believe great fulfillment should help small businesses grow, not slow them down. When a
                brand is trying to scale, they need a partner who can keep operations smooth, reduce friction,
                and give them room to focus on sales, customer experience, and product. That is the kind of
                service we want to provide.
              </p>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="shell">
            <div className="eyebrow">What guides us</div>
            <h2>Friendly service, thoughtful processes, and a lot of care.</h2>
            <div className="aboutValues">
              <article className="aboutValue">
                <h3>Shipping experience</h3>
                <p>
                  We have real operational roots in shipping and fulfillment, which means we understand the
                  day-to-day realities of inventory movement, carrier deadlines, and order accuracy.
                </p>
              </article>

              <article className="aboutValue">
                <h3>Technology that supports people</h3>
                <p>
                  We also come from technology backgrounds, so we believe systems should make work easier,
                  not harder. We use the right tools to keep things transparent, organized, and efficient.
                </p>
              </article>

              <article className="aboutValue">
                <h3>Small businesses matter</h3>
                <p>
                  We’re here to help growing brands feel supported and seen. We want to make small businesses
                  boom by giving them the kind of service and operational reliability that helps them compete.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="aboutIntro">
            <div className="eyebrow">Our approach</div>
            <h2>Simple, responsive, and personal from the first conversation.</h2>
            <p className="lede">
              We’re not trying to be a giant, distant network. We’re building a fulfillment company that is
              personal, responsive, and grounded in service. We want clients to feel comfortable reaching out,
              asking questions, and working with a team that truly understands their goals. That is what makes
              us different, and it is the kind of partnership we want to build with every brand we work with.
            </p>
            <div className="actions">
              <a className="button" href="/contact#contact">
                Talk with our team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
