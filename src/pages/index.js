import "../styles/index.css";
import * as React from "react";
import Layout from "../base-components/layout.js";

export default function Index() {
  return (
    <Layout>
      <div>
        <h1>Hi, I'm Prince!</h1>
        <p>
          And it's a pleasure to meet you - figuratively speaking of course.
        </p>
        <section className="blog-post-section">
          <h2>About Me</h2>
          <p>
            I'm an <b>Information Scientist</b> from the University of Maryland,
            College Park (grad. 2023).
          </p>
        </section>
        <section className="blog-post-section">
          <h2>My Interests</h2>
          <p>
            Learning is my greatest attribute. I love gathering information and
            putting it to <em>practical</em> use. I have a wide range of
            interests, and I've listed some below. I've also included links to
            projects that I'm particularly proud of.
          </p>
          <section>
            <h3>Artificial Intelligence</h3>
            <p>
              To me, AI provides an opportunity to learn how humans think, and
              how we can optimize that.
            </p>
            <p>
              My favorite projects in this field are:
              <ul>
                <li>Agent Simulator ✨</li>
                <li>Minds ✨</li>
                <li>Coach</li>
                <li>Portfolio Manager</li>
              </ul>
            </p>
          </section>
          <section>
            <h3>Cybersecurity</h3>
            <p>
              After completing the Google Cybersecurity Professional Certificate
              on Coursera, I become more security-conscious. And, honestly, it's
              justified my desire to learn everything I possibly can about
              computers.
            </p>
          </section>
        </section>
      </div>
    </Layout>
  );
}
