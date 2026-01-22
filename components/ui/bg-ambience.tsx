export default function BgAmbience() {
   return (
      <>
         <div className="absolute md:fixed h-screen inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-100 md:h-150 bg-grid-pattern opacity-[0.15] grid-bg" />
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-100 h-100 md:w-150 md:h-150 bg-blue-600/10 blur-3xl md:blur-[120px] rounded-full" />
         </div>
      </>
   );
}
