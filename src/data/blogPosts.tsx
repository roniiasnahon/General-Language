import React from 'react';

export const blogPosts = [
  {
    id: "file-types",
    title: "Understanding File Types",
    category: "",
    date: "",
    coverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    content: (
      <>
        <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight text-zinc-950 mb-8 pt-4">
          The Anatomy of Digital Data
        </h2>
        <p>
          Files are the fundamental containers of digital information. Understanding how different file formats organize, compress, and store data is crucial for build systems, data processors, and developers alike. At its core, every file is just a stream of bytes, but the magic happens in the interpretation.
        </p>
        
        <h3 className="text-2xl font-medium text-zinc-900 mt-12 mb-4">Encoding and Decoding</h3>
        <p>
          Before we even consider the format, we must consider the character encoding. Most modern text-based files use <strong>UTF-8</strong>, a variable-width character encoding capable of encoding all 1,112,064 valid character code points in Unicode. When a system reads a file, it must know (or guess via BOM or heuristics) the encoding to correctly map raw bytes to human-readable strings.
        </p>

        <h3 className="text-2xl font-medium text-zinc-900 mt-12 mb-4">Text-Based Formats</h3>
        <p>
          Structured serializations constitute the backbone of modern web configuration, programming languages, and static content:
        </p>
        <ul className="list-disc pl-6 space-y-4 my-6 text-zinc-700">
          <li>
            <strong className="text-zinc-950">JSON (.json):</strong> 
            JavaScript Object Notation is the industry standard for lightweight data serialization. It is built on two structures: a collection of name/value pairs and an ordered list of values. Its simplicity and language independence make it the ideal format for API communication.
          </li>
          <li>
            <strong className="text-zinc-950">YAML (.yaml / .yml):</strong> 
            Standing for "YAML Ain't Markup Language", it is a human-friendly data serialization language for all programming languages. It is commonly used for configuration files (like Docker or CI/CD pipelines) because of its reliance on indentation rather than complex bracket systems.
          </li>
          <li>
            <strong className="text-zinc-950">Markdown (.md):</strong> 
            An abstraction layer over HTML. It allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).
          </li>
        </ul>

        <h3 className="text-2xl font-medium text-zinc-900 mt-12 mb-4">The Binary Realm</h3>
        <p>
          Binary encoding is compressed and structured for special software parsers. Unlike text files, binary files are not meant to be read by human eyes without translation tools.
        </p>
        <p>
          <strong>Magic Bytes:</strong> Most binary formats include a "signature" – a few bytes at the very beginning of the file that tell the operating system what it is. For example, a PNG file always starts with the hex values <code className="bg-zinc-100 px-1 rounded">89 50 4E 47</code>.
        </p>
        
        <ul className="list-disc pl-6 space-y-4 my-6 text-zinc-700">
          <li>
            <strong className="text-zinc-950">PDF (.pdf):</strong> 
            A complex format that doesn't just store text; it stores instructions for a rendering engine. It embeds fonts, vector paths, and raster images to ensure document fidelity across any screen.
          </li>
          <li>
            <strong className="text-zinc-950">Lossy vs. Lossless Images:</strong> 
            JPEG uses lossy compression (permanently removing data to save space), while PNG is lossless (reconstructing the original data perfectly). <strong>WebP</strong> is the modern challenger, offering both modes with significantly better compression ratios for the web.
          </li>
        </ul>

        <h3 className="text-2xl font-medium text-zinc-900 mt-12 mb-4">MIME Types and Identification</h3>
        <p>
          In a web context, we rely on <strong>MIME types</strong> (Multipurpose Internet Mail Extensions). When a server sends a file, it includes a <code className="bg-zinc-100 px-1 rounded">Content-Type</code> header (e.g., <code className="bg-zinc-100 px-1 rounded">application/json</code> or <code className="bg-zinc-100 px-1 rounded">image/webp</code>). This tells the browser exactly how to handle the incoming byte stream, regardless of what the file extension might be.
        </p>
      </>
    )
  }
];
