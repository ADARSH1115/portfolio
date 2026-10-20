import { Children, cloneElement, isValidElement, type ReactNode } from "react";

// Keep natural text, emphasis, and line breaks accessible without client JS.
export function InteractiveWords({ children }: { children: ReactNode }) {
  return Children.map(children, (child) => {
    if (typeof child === "string") {
      return child.split(/(\s+)/).map((word, index) =>
        /^\s+$/.test(word) ? (
          word
        ) : (
          <span className="interactive-word" key={index}>
            <span className="interactive-word-text">{word}</span>
          </span>
        ),
      );
    }
    if (
      isValidElement<{ children?: ReactNode }>(child) &&
      child.props.children
    ) {
      return cloneElement(
        child,
        {},
        <InteractiveWords>{child.props.children}</InteractiveWords>,
      );
    }
    return child;
  });
}
