import { motion } from "motion/react";
import { Check, Zap, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Básico",
    price: "$999",
    period: "MXN · por proyecto",
    description: "Ideal para empezar a tener presencia online",
    features: [
      "Landing Page responsive",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "Diseño personalizado",
      "Optimización móvil",
      "1 mes de soporte",
      "Entrega en 2-3 días",
    ],
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/50",
    highlighted: false,
  },
  {
    name: "Empresarial",
    price: "$1,999",
    period: "MXN · por proyecto",
    description: "Todo lo que tu negocio necesita para crecer",
    features: [
      "Sitio web multi-página",
      "Secciones ilimitadas",
      "Blog o catálogo de productos",
      "SEO optimizado",
      "Redes sociales integradas",
      "Panel de administración",
      "3 meses de soporte",
      "Entrega en 3-5 días",
    ],
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500",
    highlighted: true,
    badge: "Más Popular",
  },
  {
    name: "Premium",
    price: "$2,799",
    period: "MXN · por proyecto",
    description: "Para proyectos que buscan destacar al máximo",
    features: [
      "Todo lo del plan Empresarial",
      "E-commerce completo",
      "Carrito de compras",
      "Pasarela de pagos",
      "Gestión de inventario",
      "Analytics avanzado",
      "6 meses de soporte",
      "Capacitación incluida",
      "Entrega en 5-7 días",
    ],
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/50",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-sm font-medium">💰 Precios</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Planes que se Adaptan a Ti
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Elige el plan ideal para tu proyecto. Sin costos ocultos, todo transparente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.highlighted ? "lg:scale-105" : ""}
            >
              <Card
                className={`bg-slate-900/50 border-slate-800 transition-all duration-300 h-full flex flex-col relative ${
                  plan.highlighted
                    ? "border-purple-500 shadow-2xl shadow-purple-500/20"
                    : `hover:${plan.borderColor}`
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
                      <span className="text-white text-sm font-medium">{plan.badge}</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-100 mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-400 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="flex flex-col items-center">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-xs mt-1">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white shadow-lg shadow-purple-500/30`
                        : `border-2 ${plan.borderColor} bg-transparent text-slate-200 hover:bg-slate-800`
                    }`}
                    onClick={() =>
                      window.open(
                        `https://wa.me/528715567420?text=Hola%21%20Me%20interesa%20el%20plan%20${plan.name}`,
                        "_blank"
                      )
                    }
                  >
                    {plan.highlighted ? "Comenzar Ahora" : "Más Información"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400">
            ¿Necesitas algo personalizado?{" "}
            <button
              className="text-purple-400 hover:text-purple-300 ml-1 underline"
              onClick={() =>
                window.open("https://wa.me/528715567420", "_blank")
              }
            >
              Cotización especial por WhatsApp
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}