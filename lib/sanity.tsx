import React from "react";
import sanity from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextReactComponents } from "@portabletext/react";

const sanityClient = sanity({
    // Find your project ID and dataset in `sanity.json` in your studio project
    projectId: "5su6wo00",
    dataset: "production",
    useCdn: true,
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
});

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
};

const serializers: Partial<PortableTextReactComponents> = {
    marks: {
        internalLink: ({ value, children }): JSX.Element => {
            const { slug = {} } = value;
            const href = `/${slug.current}`;
            return <a href={href}>{children}</a>;
        },
        link: ({ value, children }): JSX.Element => {
            const { href } = value;
            return (
                <a href={href} target="_blank" rel="noreferrer noopener">
                    {children}
                </a>
            );
        },
    },
};

export { sanityClient, urlFor, serializers };
