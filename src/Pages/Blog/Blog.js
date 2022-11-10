import React from 'react';

const Blog = () => {
    return (
        <div>
           <section className="p-6 bg-gray-800 text-gray-100">
	<div className="container mx-auto">
		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">InterView</span>
		<h2 className="text-5xl font-bold text-center dark:text-gray-50">Interview Question & Answer</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 dtext-gray-900">1</div>
				<p className="text-2xl font-semibold">
                Difference between SQL and NoSQL?
				</p>
                <p className='font-small'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 dtext-gray-900">2</div>
				<p className="text-2xl font-semibold">
                What is JWT, and how does it work?
				</p>
                <p className='font-small'>SON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 dtext-gray-900">3</div>
				<p className="text-2xl font-semibold">
                What is the difference between javascript and NodeJS?
				</p>
                <p className='font-small'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 dtext-gray-900">4</div>
				<p className="text-2xl font-semibold">
                How does NodeJS handle multiple requests at the same time?
				</p>
                <p className='font-small'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
			</div>
			
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;