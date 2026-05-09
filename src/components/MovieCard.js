"use client";

export default function MovieCard({ movie }) {
  return (
    <div
      className="
        group
        w-[320px]
        h-85
        rounded-[30px]
        overflow-hidden
        relative
        bg-white/70
        backdrop-blur-2xl
        border
        border-white/40
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        transition-all
        duration-500
        hover:scale-[1.03]
        hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)]
      "
    >
      {/* Premium Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-linear-to-br
          from-cyan-100/40
          via-white/10
          to-purple-100/30
        "
      />

      {/* Fake Poster */}
      <div
        className="
          h-[42%]
          bg-linear-to-br
          from-slate-100
          via-white
          to-slate-200
          flex
          items-center
          justify-center
          relative
          overflow-hidden
        "
      >
        {/* Big Letter */}
        <h1
          className="
            text-8xl
            font-black
            text-black/5
            group-hover:scale-110
            transition-transform
            duration-500
          "
        >
          {movie.name.charAt(0)}
        </h1>

        {/* Genre */}
        <div className="absolute top-4 left-4">
          <span
            className="
              px-4
              py-1
              rounded-full
              text-xs
              font-semibold
              bg-white/70
              backdrop-blur-lg
              border
              border-white/50
              text-slate-700
              shadow-sm
            "
          >
            {movie.genre}
          </span>
        </div>

        {/* ID */}
        <div className="absolute top-4 right-4 text-xs text-slate-400 font-medium">
          #{movie.id}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-[58%]">
        
        <div>
          {/* Title */}
          <h2
            className="
              text-2xl
              font-bold
              text-slate-800
              mb-2
              tracking-tight
              line-clamp-1
            "
          >
            {movie.name}
          </h2>

          {/* Date */}
          <p className="text-sm text-slate-500 mb-4">
            {movie.releaseDate}
          </p>

          {/* Description */}
          <p
            className="
              text-sm
              leading-relaxed
              text-slate-600
              line-clamp-3
            "
          >
            {movie.description}
          </p>
        </div>

        {/* Button */}
        <button
          className="
            mt-5
            w-full
            py-3
            rounded-2xl
            bg-slate-900
            text-white
            font-semibold
            transition-all
            duration-300
            hover:bg-slate-700
            hover:shadow-lg
          "
        >
          Watch Now
        </button>
      </div>
    </div>
  );
}