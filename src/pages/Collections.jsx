import SectionHeading from "../components/SectionHeading";
import CollectionCard from "../components/CollectionCard";
import PageHero from "../components/PageHero";
import PieceCard from "../components/PieceCard";
import { brand } from "../data/siteContent";
import { collections, pieces } from "../data/pieces";
import { getGalleryImage } from "../utils/localMedia";

function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Signature Collections"
        title="Jewelry worlds shaped as stories, not stock lists."
        description={`Every collection at ${brand.name} is presented as a mood, a lineage, and a careful study of form. Large visuals, craftsmanship notes, and quiet inquiry pathways replace pricing-first browsing.`}
        image={getGalleryImage(4)}
        primaryCta={{ label: "Request Details", href: "/consultation" }}
        secondaryCta={{ label: "Read the Craft", href: "/craftsmanship" }}
        accent="Know more, slowly."
        compact
      />

      <section className="section-shell py-14">
        <div className="section-frame space-y-8">
          {collections.map((collection, index) => {
            const collectionPieces = pieces.filter((piece) =>
              collection.leadPieces.includes(piece.slug),
            );

            return (
              <CollectionCard
                key={collection.id}
                collection={collection}
                pieces={collectionPieces}
                reverse={Boolean(index % 2)}
              />
            );
          })}
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame">
          <SectionHeading
            eyebrow="Piece Archive"
            title="An editorial sweep of the current jewelry stories."
            description="These pieces are meant to be entered one by one, each opening into a more detailed page around story, detail, finish, and craftsmanship."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pieces.map((piece) => (
              <PieceCard key={piece.slug} piece={piece} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CollectionsPage;
