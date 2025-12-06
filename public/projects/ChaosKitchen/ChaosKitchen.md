For my CIS*4030 "Mobile Development" Capstone project, my team and I built **Chaos Kitchen**, a two-player cooperative mobile game all about communication. The concept blends the information gap mechanics of "Keep Talking and Nobody Explodes" with the frantic kitchen of Overcooked 2. The core loop tasks two players with preparing a Beef Wellington before time runs out, but they operate with completely different views and responsibilities. The "Cook" works inside the kitchen with access to ingredients and appliances such as the oven, stove, and cutting board, but they don't know the recipe. On the other side, the "Instructor" manages the front-of-house and holds the recipe on a clipboard but does not have access to the kitchen.

![A screenshot of the Cook's view in the kitchen](/projects/ChaosKitchen/cook_view.png?raw=true "no-outline width=70")
![A screenshot of the Instructor's view in the kitchen](/projects/ChaosKitchen/instructor_view.png?raw=true "no-outline width=70")

Success in the game relies entirely on verbal coordination. For instance, the kitchen oven is powered by a coal furnace located in the Instructor's room, meaning the Cook cannot roast the beef without coordinating fuel timings with their partner. We also wanted to incorporate more random events, such as utility failures like lights going out or water leaks flooding the kitchen, to heighten the pressure and replayability.

## Technical Implementation

We engineered the mobile client using **Flutter** and the **Flame engine**, paired with a **Python** backend to handle game state synchronization. A major highlight of our implementation was our networking approach. Because the client (Dart/Flutter) and server (Python) required constant WebSocket communication to sync the game state, we needed a serialization method more robust than standard JSON.

We implemented Protobufs to solve this, defining our messages once in a single `.proto` file. This allowed the Protobuf CLI to automatically generate typed clients for both Dart and Python, which saved us from writing boilerplate code and kept our message types in sync across languages. Additionally, because Protobufs serialize to binary rather than strings, they offered superior performance for our mobile environment.

We also focused heavily on improving the developer experience. Midway through the project, we encountered a bottleneck where the Flame engine’s lack of hot reload support caused the game to reset completely upon every code save, losing inventory and position data. To increase our velocity, we implemented a system that periodically syncs the player's position to the server. This allowed us to disconnect via hot reload and reconnect exactly where we left off, drastically tightening our feedback loop.

## Challenges & Solutions

### Collision Detection
Working with the Flame engine provided distinct physics challenges, as its native collision API is relatively basic and lacks built-in handling for complex multi-hitbox scenarios, such as a player moving into a corner.

![](/projects/ChaosKitchen/debug_view.png?raw=true "no-outline width=70")

We dedicated significant time to figuring out a more robust solution, but ultimately, the player could still clip out of bounds if they hit an inside angle correctly. While we decided to stick with the basic system to prioritize other gameplay features for the deadline, the experience offered valuable insight into the complexities of building collision systems from scratch.

### Visual Assets & Rendering
We initially aimed for a 2D style similar to *Among Us*, but finding consistent assets proved difficult, so we pivoted to using 3D assets primarily from [Kenney.nl](https://kenney.nl/) which I composed and rendered into 2D backgrounds using Blender. Transforming these 3D scenes into functional 2D game maps was an iterative process. My initial renders used a standard perspective camera, which resulted in a harsh "black void" surrounding the room, so I built out a surrounding environment with streets and alleys to act as visual filler. However, the perspective distortion made aligning 2D hitboxes difficult, prompting a shift to an orthographic camera. This flattened the scene into a perfect rectangle, allowing us to map 2D coordinates 1:1 with the image. After testing various inclinations, I decided on a 10-degree camera angle to provide depth while keeping the gameplay readable.

With the map established, the original 2D player placeholders felt disconnected, so I created and rendered 3D versions of our characters at the exact same angle to unify the lighting and perspective. The final hurdle was a depth rendering issue where upright objects like fridge doors needed to appear *in front* of the player, while the floor remained *behind*. We solved this by rendering the scenes into two distinct image layers: a "base" layer for the floor and an "overlay" layer for walls and appliances. By sandwiching the player sprite between these static images, we achieved a convincing 2.5D effect without the performance overhead of a real-time 3D engine.

![A screenshot of the Blender World](/projects/ChaosKitchen/blender_world.png?raw=true "")

## Conclusion
This project was a comprehensive exercise in full-stack mobile development. Beyond the game design itself, it demanded solutions for network latency, cross-language type safety, and complex asset pipelines. We structured our workflow using Agile practices, relying on GitHub for version control and daily Discord standups to manage dependencies and concurrent work.