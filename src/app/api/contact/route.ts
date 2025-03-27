export async function POST(req: Request) {
    try {
        const body = await req.json();

        console.log("Полученные данные:", body);

        return new Response(
            JSON.stringify({ message: `Спасибо за проявленный интерес, ${body.username}` }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Ошибка обработки запроса" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
