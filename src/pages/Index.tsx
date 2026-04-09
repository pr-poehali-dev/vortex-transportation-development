import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/d62e3e13-16ac-4d0c-abfe-4bbf2eb61729/files/fad2c6a1-c6fa-4bf2-b7be-383002a5bd28.jpg",
    "https://cdn.poehali.dev/projects/d62e3e13-16ac-4d0c-abfe-4bbf2eb61729/files/a6bf6b50-4553-46c5-8484-1740dcfe453c.jpg",
    "https://cdn.poehali.dev/projects/d62e3e13-16ac-4d0c-abfe-4bbf2eb61729/files/12053f04-4cad-4411-8ce8-360899553106.jpg",
    "https://cdn.poehali.dev/projects/d62e3e13-16ac-4d0c-abfe-4bbf2eb61729/files/e165f51f-a189-4fe0-a6a5-c3efab941925.jpg",
    "https://cdn.poehali.dev/projects/d62e3e13-16ac-4d0c-abfe-4bbf2eb61729/files/d9fbed55-2641-4194-9dd1-3ec1980c0624.jpg",
    "https://cdn.poehali.dev/projects/d62e3e13-16ac-4d0c-abfe-4bbf2eb61729/files/99e4ce3b-8a57-48bc-928d-fd537e577284.jpg",
    "https://cdn.poehali.dev/projects/d62e3e13-16ac-4d0c-abfe-4bbf2eb61729/files/474ab893-f829-4dae-a2b8-a4042776eb5c.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;