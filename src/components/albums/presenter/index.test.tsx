import { render, screen, within } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import Meta, { Default as AlbumsStory } from "./index.stories";

const Albums = composeStory(AlbumsStory, Meta);

describe("Albums", () => {
  test("should render a list of albums", () => {
    // arrange
    render(<Albums />);

    // act
    const list = screen.getByRole<HTMLUListElement>("list");
    const items = within(list).getAllByRole("listitem");

    // assert
    expect(items).toHaveLength(3);
    expect(items[0].textContent).toBe("quidem molestiae enim");
    expect(items[1].textContent).toBe("sunt qui excepturi placeat culpa");
    expect(items[2].textContent).toBe("omnis laborum odio");
  });
});
