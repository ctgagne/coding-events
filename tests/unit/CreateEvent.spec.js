import { mount } from "@vue/test-utils";
import CreateEvent from "@/views/CreateEvent.vue";
import { createEvent } from "@/services/event-service.js";

jest.mock("@/services/event-service.js");

describe("CreateEvent", () => {
  test("it has an <h1> heading", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("h1")).toBe(true);
  });
  test("should have a heading saying Create an Event", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.get("h1").text()).toBe("Create an Event");
  });
  test("it contains a form element", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("form")).toBe(true);
  });
  test("it contains a title input field", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("input[name='title'][type='text']")).toBe(true);
  });
  test("it contains a submit button", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("input[value='Create'][type='submit']")).toBe(true);
  });
  test("it contains an input field for the tile with the placeholder 'Add a Title'", () => {
    const wrapper = mount(CreateEvent);
    const titleInput = wrapper.get("input[name='title']");
    expect(titleInput.attributes("placeholder")).toBe("Add a Title");
  });
  test("it should have an event data property", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.vm.event).toEqual({
      title: ""
    });
  });
  test("it should bind the event title to the user input", () => {
    const wrapper = mount(CreateEvent);
    const titleInput = wrapper.get("input[name='title'");
    titleInput.setValue("JS Pair Programming");
    expect(wrapper.vm.event.title).toBe("JS Pair Programming");
  });

  test("it should have a submit method", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.vm.submit).toBeDefined();
    expect(typeof wrapper.vm.submit).toBe("function");
  });

  test("it should call the submit method on a submit event of the form", () => {
    const wrapper = mount(CreateEvent);
    // Add a spy mock function, overiding my method
    wrapper.vm.submit = jest.fn(); //Creating a mock function
    wrapper.get("form").trigger("submit");
    // expect that the spy mock function has been called
    expect(wrapper.vm.submit).toHaveBeenCalled();
  });

  test("it should call the event service, after the user has input a title and hit submit", () => {
    createEvent.mockReset();
    const wrapper = mount(CreateEvent);
    // User input a title
    wrapper.get("input[name='title']").setValue("Go to the zoo");
    //User hits submit
    createEvent.mockReturnValue({ data: { title: "", id: 1 } });
    wrapper.get("form").trigger("submit");

    expect(wrapper.vm.submit).toHaveBeenCalled({ title: "Go to the zoo" });
  });
});
