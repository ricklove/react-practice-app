
export async function getToggles() {
    const greetingReponse = await fetch('https://raw.githubusercontent.com/Nimrod007/someRepo/master/ft.json');

    let greetingValue = false;
    if (greetingReponse.ok) {
        const json = await greetingReponse.json();
        greetingValue = json.greeting;
    }

    return {
        greeting: greetingValue,
    };
}
