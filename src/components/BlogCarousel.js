import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogCarousel({ blogs, search: Search }) {
  const blogsData = blogs.nodes;
  debugger;
  return (
    <>
      <Carousel controls="false">
        {blogsData.map(({ id, frontmatter }) => (
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            /> */}
            <GatsbyImage
              style={{
                maxHeight: 400,
                minHeight: 400,
                width: "100%",
              }}
              className="d-block w-100"
              image={getImage(frontmatter.cardImage)}
              alt={frontmatter.slug}
            />
            <Carousel.Caption>
              <h3> {frontmatter.title} </h3>
              <p>{frontmatter.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>

          //   <div key={id} className="column is-4" style={style.bloglistContainer}>
          //     <BlogCard
          //       title={frontmatter.title}
          //       subtitle={frontmatter.subtitle}
          //       slug={frontmatter.slug}
          //       date={frontmatter.date}
          //       coverImage={frontmatter.coverImage}
          //       cardImage={frontmatter.cardImage}
          //     />
          //   </div>
        ))}
      </Carousel>
    </>
  );
}
