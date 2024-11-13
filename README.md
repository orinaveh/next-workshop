# Next Workshop

## Content

- [ ] Next.js
- [ ] Custom Hooks
- [ ] Common Components
- [ ] Tailwind CSS
- [ ] ISR / SSG / SSR and when to use it
- [ ] Next Routing

## Challenges

- Add a custom hook in counter page.

> Create a custom hook that will handle the state of the counter.
 Refactor the counter page to use the custom hook.
 [React Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

- Find a way to display the number of rerenders of the counter page.

> Do not count the number of clicks. This would display the number of times the page has been rendered, however in this challenge please assume that the page can be rendered in many other ways.
Clue: useState might not be helpful here. Think why is that?

- Create a common component for button, and use it in counter page. use Tailwind CSS to style the button. [Tailwind](https://tailwindcss.com/docs)

> Make sure that our button component can accept every props that a button can accept, while keeping typescript happy.

- Format layout using Tailwind CSS.

- Add new page with route `/counter-ssg` and use SSG (Full Route Cache) to render the page, and move the state of counter to the url. [Link](https://nextjs.org/docs/app/building-your-application/caching#full-route-cache)

- Add new page with route `/counter-isr` and use ISR to render the page, and move the state of counter to the url. rerender the page every 1 minute. [Link](https://nextjs.org/docs/app/building-your-application/caching#revalidating-1)
