export default function HookSection({ children, title, description, addOn }) {
  return (
    <div className="mt-10 shadow bg-gray-200 rounded-md p-4">
      <Heading title={title} />
      <Description text={description} />
      <HookBody>{children}</HookBody>
      {addOn ? <div className="mt-2 text-xs italic">{addOn}</div> : null}
    </div>
  );
}

function Heading({ title }) {
  return <h2 className="text-2xl font-bold italic">{title}</h2>;
}

function Description({ text }) {
  return (
    <blockquote className="p-4 my-4 border-s-4 rounded-r-sm border-gray-400 bg-gray-50">
      <p className="text-base italic font-medium leading-relaxed text-gray-900">
        {text}
      </p>
    </blockquote>
  );
}

function HookBody({ children }) {
  return (
    <div className="flex items-center justify-center gap-4 min-h-80 bg-slate-50 w-[100%] rounded-md p-16">
      {children}
    </div>
  );
}
