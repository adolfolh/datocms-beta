import { StructuredText, Image } from "react-datocms";

export default function PostBody({ content, challenge, goal, process, conclusion, hyperlink }) {
  return (
    <>        
      <div className="flex justify-center flex-col">
        <div className="prose prose-xl prose-invert max-w-none">
          {challenge && 
          <div className="flex flex-col md:flex-row items-baseline md:p-16">
            <p className="uppercase text-sm md:w-1/4 md:text-left font-bold">The Challenge</p>
            <div className="font-light md:w-3/4 ">
              <StructuredText
                data={challenge}
                renderBlock={({ record }) => {
                  if (record.__typename === "ImageBlockRecord") {
                    return <Image data={record.image.responsiveImage} />;
                  }

                  return (
                    <>
                      <p>Don't know how to render a block!</p>
                      <pre>{JSON.stringify(record, null, 2)}</pre>
                    </>
                  );
                }}
              />
            </div>
          </div>}

          {goal && 
          <div className="flex flex-col md:flex-row items-baseline md:p-16">
            <p className="uppercase text-sm md:w-1/4 md:text-left font-bold">The Goal</p>
            <div className="font-light md:w-3/4 ">
              <StructuredText
                data={goal}
                renderBlock={({ record }) => {
                  if (record.__typename === "ImageBlockRecord") {
                    return <Image data={record.image.responsiveImage} />;
                  }

                  return (
                    <>
                      <p>Don't know how to render a block!</p>
                      <pre>{JSON.stringify(record, null, 2)}</pre>
                    </>
                  );
                }}
              />
            </div>
          </div>}


          {process && 
          <div className="flex flex-col md:flex-row items-baseline md:p-16">
            <p className="uppercase text-sm md:w-1/4 md:text-left font-bold">The Process</p>
            <div className="font-light md:w-3/4 ">
              <StructuredText
                data={process}
                renderBlock={({ record }) => {
                  if (record.__typename === "ImageBlockRecord") {
                    return <Image data={record.image.responsiveImage} />;
                  }

                  return (
                    <>
                      <p>Don't know how to render a block!</p>
                      <pre>{JSON.stringify(record, null, 2)}</pre>
                    </>
                  );
                }}
              />
            </div>
          </div>}

          {conclusion && 
          <div className="flex flex-col md:flex-row items-baseline md:p-16">
            <p className="uppercase text-sm md:w-1/4 md:text-left font-bold">The Conclusion</p>
            <div className="font-light md:w-3/4 ">
              <StructuredText
                data={conclusion}
                renderBlock={({ record }) => {
                  if (record.__typename === "ImageBlockRecord") {
                    return <Image data={record.image.responsiveImage} />;
                  }

                  return (
                    <>
                      <p>Don't know how to render a block!</p>
                      <pre>{JSON.stringify(record, null, 2)}</pre>
                    </>
                  );
                }}
              />
            </div>
          </div>}
          
          {content && <StructuredText
            data={content}
            renderBlock={({ record }) => {
              if (record.__typename === "ImageBlockRecord") {
                return <Image data={record.image.responsiveImage} />;
              }

              return (
                <>
                  <p>Don't know how to render a block!</p>
                  <pre>{JSON.stringify(record, null, 2)}</pre>
                </>
              );
            }}
          />}

        </div>
        {hyperlink && <a href={hyperlink} className="arrow-button max-w-full opacity-1 inline-block md:p-16">
            <div class="cta-text !no-underline">See live site</div>
            <div class="arrow-cta">
              <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-accent-1" fill-rule="evenodd" clip-rule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z"></path>
              </svg>
            </div>
          </a>}
      </div>
    </>
  );
}
