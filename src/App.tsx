import React, { useState, useEffect } from 'react';
import { Calendar, User, BookOpen, Code, Database, Search, X, ChevronLeft, ChevronRight, FileText, Monitor, Brain, Layers, Shield, Eye, Trophy, GraduationCap } from 'lucide-react';

interface WeekData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  content: JSX.Element;
  icon: JSX.Element;
  tags: string[];
  status: 'completed' | 'in-progress' | 'upcoming' | 'exam';
  color: string;
}

function App() {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedWeek !== null) {
        if (e.key === 'Escape') {
          setSelectedWeek(null);
        } else if (e.key === 'ArrowLeft') {
          const prevWeek = selectedWeek > 1 ? selectedWeek - 1 : weeks.length;
          setSelectedWeek(prevWeek);
        } else if (e.key === 'ArrowRight') {
          const nextWeek = selectedWeek < weeks.length ? selectedWeek + 1 : 1;
          setSelectedWeek(nextWeek);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWeek]);

  const weeks: WeekData[] = [
    {
      id: 1,
      title: 'Modelo Objeto-Relacional',
      subtitle: 'Introducción a conceptos fundamentales',
      description: 'Revisión del cronograma y conceptos del modelo objeto-relacional que combina bases de datos relacionales con programación orientada a objetos.',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-blue-800 font-semibold mb-2">🔍 Conceptos Clave de POO en Bases de Datos</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-800">Características Principales</h5>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                  <li><strong>Modularidad</strong>: Estructurar código en módulos independientes</li>
                  <li><strong>Herencia</strong>: Clases heredan atributos y métodos</li>
                  <li><strong>Encapsulamiento</strong>: Ocultamiento de detalles internos</li>
                  <li><strong>Polimorfismo</strong>: Procesamiento de objetos de diferentes formas</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <h5 className="text-green-400 mb-2">Ejemplo de Tipo Personalizado en SQL Server</h5>
            <pre className="text-sm"><code>{`-- Crear un tipo de dato personalizado
CREATE TYPE [dbo].[PhoneCelular] FROM [nvarchar](8) NOT NULL
GO

-- Crear tabla que utiliza el tipo personalizado
CREATE TABLE [dbo].[Empleados](
    [EmpID] [int] NULL,
    [EmpNombre] [varchar](20) NULL,
    [EmpNumberPersonal] [dbo].[PhoneCelular]
) ON [PRIMARY]
GO

-- Insertar datos
INSERT INTO Empleados VALUES(1, 'Huberth', '83088505');
INSERT INTO Empleados VALUES(2, 'Rebeca', '83098505');`}</code></pre>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <h4 className="text-green-800 font-semibold mb-2">💡 Ventajas del Modelo Objeto-Relacional</h4>
            <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
              <li>Mayor capacidad de modelado de datos complejos</li>
              <li>Mejor integración con lenguajes orientados a objetos</li>
              <li>Mayor flexibilidad en el diseño de la base de datos</li>
              <li>Mejor rendimiento para ciertos tipos de consultas</li>
            </ul>
          </div>
        </div>
      ),
      icon: <Database className="w-6 h-6" />,
      tags: ['Bases de Datos', 'Modelo Objeto-Relacional', 'POO'],
      status: 'completed',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Suspensión de Actividades',
      subtitle: 'No hubo clases programadas',
      description: 'Las actividades de esta semana fueron suspendidas y se programaron para una sesión de recuperación posterior.',
      content: (
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">No hubo clases esta semana</h3>
            <p className="text-gray-600">Las actividades programadas se verán en una sesión de recuperación.</p>
          </div>
        </div>
      ),
      icon: <Calendar className="w-6 h-6" />,
      tags: ['Suspensión'],
      status: 'completed',
      color: 'bg-red-500'
    },
    {
      id: 3,
      title: 'GraphQL con Apollo Server',
      subtitle: 'Implementación práctica con profesores interinos',
      description: 'Exploración de GraphQL y Apollo Server con MongoDB. Sesión práctica dirigida por el profesor Jorge Ruiz.',
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-purple-800 font-semibold mb-2">🔍 ¿Qué es Apollo Server?</h4>
            <p className="text-purple-700 text-sm">
              Apollo Server es un servidor de código abierto de GraphQL que funciona con cualquier base de datos 
              y se integra perfectamente con otras herramientas del ecosistema GraphQL.
            </p>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <h5 className="text-blue-400 mb-2">Configuración básica de Apollo Server</h5>
            <pre className="text-sm"><code>{`const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

// Definir el esquema GraphQL
const typeDefs = \`
  type Usuario {
    id: ID!
    nombre: String!
    email: String!
  }

  type Query {
    usuarios: [Usuario!]!
  }
\`;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/ejemplo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});`}</code></pre>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Ventajas de GraphQL</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Consultas específicas y eficientes</li>
                <li>• Esquema fuertemente tipado</li>
                <li>• Herramientas de desarrollo integradas</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Integración con MongoDB</h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Desarrollo full-stack fluido</li>
                <li>• Flexibilidad en el modelado</li>
                <li>• Mejor rendimiento en consultas</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      icon: <Code className="w-6 h-6" />,
      tags: ['GraphQL', 'Apollo Server', 'Node.js', 'MongoDB'],
      status: 'completed',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Implementación Avanzada GraphQL',
      subtitle: 'Profundización en GraphQL y MongoDB',
      description: 'Implementación completa de un servidor GraphQL con Apollo, incluyendo estructura del proyecto y configuración avanzada.',
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
            <h4 className="text-indigo-800 font-semibold mb-2">⚙️ Estructura del Proyecto</h4>
            <div className="text-indigo-700 text-sm space-y-2">
              <p><code className="bg-indigo-100 px-2 py-1 rounded">data_db.js</code>: Configuración y conexión a la base de datos</p>
              <p><code className="bg-indigo-100 px-2 py-1 rounded">schema_db.js</code>: Definición de tipos y validaciones</p>
              <p><code className="bg-indigo-100 px-2 py-1 rounded">models/</code>: Esquemas de MongoDB</p>
            </div>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <h5 className="text-yellow-400 mb-2">Configuración de package.json</h5>
            <pre className="text-sm"><code>{`{
  "name": "demo_01",
  "version": "1.0.0",
  "description": "GraphQL con Apollo Server y MongoDB",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "type": "module",
  "dependencies": {
    "@apollo/server": "^4.12.2",
    "graphql": "^16.11.0",
    "mongoose": "^8.2.0",
    "nodemon": "^3.1.0"
  }
}`}</code></pre>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <h4 className="text-green-800 font-semibold mb-2">💡 Flujo de Trabajo</h4>
            <ol className="list-decimal list-inside text-sm text-green-700 space-y-1">
              <li>Configuración de Apollo Server con Express</li>
              <li>Conexión a MongoDB usando Mongoose</li>
              <li>Definición de tipos y esquemas en GraphQL</li>
              <li>Implementación de consultas y mutaciones</li>
              <li>Configuración de Nodemon para desarrollo</li>
            </ol>
          </div>
        </div>
      ),
      icon: <Monitor className="w-6 h-6" />,
      tags: ['GraphQL', 'Apollo Server', 'MongoDB', 'Mongoose'],
      status: 'completed',
      color: 'bg-indigo-500'
    },
    {
      id: 5,
      title: 'Consultas GraphQL Avanzadas',
      subtitle: 'Práctica de consultas y resolvers',
      description: 'Implementación de consultas complejas con GraphQL, incluyendo relaciones entre entidades y variables dinámicas.',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <h4 className="text-orange-800 font-semibold mb-2">📊 Consultas con Relaciones</h4>
            <p className="text-orange-700 text-sm">
              Aprende a estructurar consultas GraphQL que manejen relaciones complejas entre entidades,
              optimizando la transferencia de datos y mejorando el rendimiento.
            </p>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <h5 className="text-green-400 mb-2">Consulta de Categorías con Productos</h5>
            <pre className="text-sm"><code>{`query GetCategoriesWithProducts {
  categories {
    CategoryID
    CategoryName
    Products {
      ProductID
      ProductName
      UnitPrice
    }
  }
}`}</code></pre>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <h5 className="text-blue-400 mb-2">Consulta con Variables</h5>
            <pre className="text-sm"><code>{`query GetProductDetails($productId: Int!) {
  product(ProductID: $productId) {
    ProductName
    UnitPrice
    UnitsInStock
    Category {
      CategoryName
      Description
    }
    Supplier {
      CompanyName
      ContactName
      Country
    }
  }
}`}</code></pre>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <h4 className="text-yellow-800 font-semibold mb-2">⚡ Optimización de Consultas</h4>
            <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1">
              <li>Uso de DataLoader para evitar el problema N+1</li>
              <li>Implementación de paginación con cursores</li>
              <li>Cache de consultas frecuentes</li>
              <li>Validación de esquemas en tiempo de ejecución</li>
            </ul>
          </div>
        </div>
      ),
      icon: <Search className="w-6 h-6" />,
      tags: ['GraphQL', 'Consultas', 'Optimización', 'Variables'],
      status: 'completed',
      color: 'bg-orange-500'
    },
    {
      id: 6,
      title: 'Particionamiento de Bases de Datos',
      subtitle: 'Optimización mediante división de datos',
      description: 'Técnicas de particionamiento para mejorar el rendimiento en entornos con grandes volúmenes de información.',
      content: (
        <div className="space-y-6">
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
            <h4 className="text-teal-800 font-semibold mb-2">🔍 Tipos de Particionamiento</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <h5 className="font-medium text-teal-800">Particionamiento Vertical</h5>
                <ul className="text-sm text-teal-700 mt-1 space-y-1">
                  <li>• Divide tabla en múltiples tablas más pequeñas</li>
                  <li>• Mantiene clave primaria común</li>
                  <li>• Separa columnas frecuentes de las menos usadas</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-teal-800">Particionamiento Horizontal</h5>
                <ul className="text-sm text-teal-700 mt-1 space-y-1">
                  <li>• Divide registros según criterio específico</li>
                  <li>• Cada partición mantiene estructura completa</li>
                  <li>• Permite distribución física de datos</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <h5 className="text-cyan-400 mb-2">Implementación en SQL Server</h5>
            <pre className="text-sm"><code>{`-- Crear función de partición
CREATE PARTITION FUNCTION pf_Anios (int)
AS RANGE LEFT FOR VALUES (2019, 2020, 2021, 2022, 2023);

-- Crear esquema de partición
CREATE PARTITION SCHEME ps_Anios
AS PARTITION pf_Anios ALL TO ([PRIMARY]);

-- Crear tabla con particionamiento
CREATE TABLE Ventas (
    Anio int,
    ClienteID int,
    Monto money
) ON ps_Anios(Anio);`}</code></pre>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <h4 className="text-green-800 font-semibold mb-2">💡 Beneficios del Particionamiento</h4>
            <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
              <li>Mejora rendimiento de consultas en subconjuntos</li>
              <li>Facilita mantenimiento de particiones individuales</li>
              <li>Reduce tiempos de respuesta al procesar menos datos</li>
              <li>Permite estrategias de almacenamiento eficientes</li>
            </ul>
          </div>
        </div>
      ),
      icon: <Layers className="w-6 h-6" />,
      tags: ['SQL Server', 'Optimización', 'Particionamiento'],
      status: 'completed',
      color: 'bg-teal-500'
    },
    {
      id: 7,
      title: 'Exposiciones Estudiantiles',
      subtitle: 'Presentaciones de temas avanzados',
      description: 'Galería de exposiciones estudiantiles sobre arquitectura de aplicaciones web, patrones de diseño y optimización.',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-semibold text-blue-800">Arquitectura Web</h5>
              <p className="text-sm text-blue-700 mt-1">Patrones modernos de desarrollo</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-semibold text-green-800">Mejores Prácticas</h5>
              <p className="text-sm text-green-700 mt-1">Patrones de diseño y código limpio</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h5 className="font-semibold text-purple-800">Seguridad</h5>
              <p className="text-sm text-purple-700 mt-1">Protección de aplicaciones web</p>
            </div>
          </div>
          
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
            <h4 className="text-gray-800 font-semibold mb-2">📌 Temas Cubiertos</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Arquitectura de aplicaciones web modernas</li>
              <li>Patrones de diseño y mejores prácticas</li>
              <li>Optimización de rendimiento</li>
              <li>Seguridad en aplicaciones web</li>
            </ul>
          </div>
        </div>
      ),
      icon: <FileText className="w-6 h-6" />,
      tags: ['Presentaciones', 'Desarrollo Web', 'Tecnologías'],
      status: 'completed',
      color: 'bg-pink-500'
    },
    {
      id: 8,
      title: 'Bases de Datos Distribuidas',
      subtitle: 'Sistemas distribuidos y arquitecturas',
      description: 'Introducción a bases de datos distribuidas, incluyendo el modelo de Schroeder y arquitectura share-nothing.',
      content: (
        <div className="space-y-6">
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
            <h4 className="text-cyan-800 font-semibold mb-2">🌐 ¿Qué es una Base de Datos Distribuida?</h4>
            <p className="text-cyan-700 text-sm">
              Sistema donde la información se reparte entre varios equipos conectados en red, 
              trabajando de manera coordinada como una sola base unificada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">✅ Ventajas</h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Mejor rendimiento distribuido</li>
                <li>• Disponibilidad continua</li>
                <li>• Escalabilidad flexible</li>
                <li>• Cercanía geográfica a usuarios</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">⚠️ Desafíos</h5>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Coherencia de datos</li>
                <li>• Complejidad administrativa</li>
                <li>• Seguridad distribuida</li>
                <li>• Sincronización en tiempo real</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="text-purple-800 font-semibold mb-2">🏗️ Share-Nothing Architecture</h4>
            <p className="text-purple-700 text-sm mb-2">
              Modelo donde cada nodo tiene recursos propios (CPU, memoria, almacenamiento) sin compartirlos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              <div className="bg-purple-100 p-2 rounded">Escalabilidad horizontal</div>
              <div className="bg-purple-100 p-2 rounded">Reducción de cuellos de botella</div>
              <div className="bg-purple-100 p-2 rounded">Aislamiento de fallos</div>
            </div>
          </div>
        </div>
      ),
      icon: <Shield className="w-6 h-6" />,
      tags: ['Bases Distribuidas', 'Arquitectura', 'Escalabilidad'],
      status: 'completed',
      color: 'bg-cyan-500'
    },
    {
      id: 9,
      title: 'Primer Examen',
      subtitle: 'Evaluación de conocimientos',
      description: 'Examen para evaluar los conocimientos adquiridos sobre modelos objeto-relacionales y GraphQL.',
      content: (
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-12 h-12 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Primer Examen Parcial</h3>
            <p className="text-gray-600">Evaluación de conceptos fundamentales y aplicaciones prácticas</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-yellow-800 mb-2">Temas evaluados:</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Modelo objeto-relacional</li>
                <li>• GraphQL y Apollo Server</li>
                <li>• Implementación práctica con MongoDB</li>
                <li>• Optimización de consultas</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      icon: <FileText className="w-6 h-6" />,
      tags: ['Examen', 'Evaluación'],
      status: 'exam',
      color: 'bg-yellow-500'
    },
    {
      id: 10,
      title: 'Entrega del Proyecto',
      subtitle: 'Arquitectura y paralelismo avanzado',
      description: 'Profundización en arquitecturas distribuidas, paralelismo en bases de datos y modelos de seguridad.',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-blue-800 font-semibold mb-2">🏗️ Arquitectura de Bases Distribuidas</h4>
            <p className="text-blue-700 text-sm">
              Sistema donde los datos se almacenan en múltiples nodos conectados por red, 
              gestionados como una sola base unificada para el usuario.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-800 mb-2">Paralelismo de Consultas</h5>
              <p className="text-sm text-indigo-700">Ejecución en diferentes nodos para reducir tiempo de respuesta</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-2">Paralelismo de Transacciones</h5>
              <p className="text-sm text-purple-700">Múltiples transacciones simultáneas sin conflictos</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-lg">
              <h5 className="font-semibold text-pink-800 mb-2">Paralelismo de Datos</h5>
              <p className="text-sm text-pink-700">Fragmentación y procesamiento en paralelo</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <h4 className="text-yellow-800 font-semibold mb-2">🔒 Modelo de Schroeder</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-yellow-700">
              <div>• <strong>Economía de mecanismos:</strong> Arquitectura simple</div>
              <div>• <strong>Defensa en profundidad:</strong> Múltiples capas de seguridad</div>
              <div>• <strong>Privilegio mínimo:</strong> Permisos estrictamente necesarios</div>
              <div>• <strong>Auditoría y control:</strong> Registro de eventos</div>
            </div>
          </div>
        </div>
      ),
      icon: <Layers className="w-6 h-6" />,
      tags: ['Proyecto', 'Arquitectura', 'Paralelismo', 'Seguridad'],
      status: 'completed',
      color: 'bg-indigo-600'
    },
    
    {
      id: 11,
      title: 'Segundo Examen Parcial',
      subtitle: 'Evaluación intermedia',
      description: 'Examen sobre bases de datos distribuidas, arquitecturas avanzadas y búsqueda de texto completo.',
      content: (
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-12 h-12 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Segundo Examen Parcial</h3>
            <p className="text-gray-600">Evaluación de conceptos avanzados y arquitecturas distribuidas</p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-orange-800 mb-2">Temas evaluados:</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Bases de datos distribuidas</li>
                <li>• Modelos de consistencia</li>
                <li>• Replicación y particionamiento</li>
                <li>• Búsqueda de texto completo</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      icon: <FileText className="w-6 h-6" />,
      tags: ['Examen', 'Evaluación'],
      status: 'exam',
      color: 'bg-orange-500'
    },
    {
      id: 12,
      title: 'Full Text Search',
      subtitle: 'Búsqueda avanzada de texto',
      description: 'Implementación de búsqueda de texto completo en SQL Server con índices especializados y consultas complejas.',
      content: (
        <div className="space-y-6">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h4 className="text-emerald-800 font-semibold mb-2">🔍 Características de Full Text Search</h4>
            <ul className="list-disc list-inside text-sm text-emerald-700 space-y-1">
              <li><strong>Término simple:</strong> Búsqueda de palabra o frase exacta</li>
              <li><strong>Término de prefijo:</strong> Palabras que comienzan con texto dado</li>
              <li><strong>Término de inflexión:</strong> Formas gramaticales de una palabra</li>
              <li><strong>Término de proximidad (NEAR):</strong> Palabras cercanas entre sí</li>
            </ul>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <h5 className="text-emerald-400 mb-2">Ejemplos de consultas con CONTAINS</h5>
            <pre className="text-sm"><code>{`-- Buscar productos que contengan 'cámara' en descripción
SELECT * FROM Productos 
WHERE CONTAINS(descripcion, 'cámara');

-- Búsqueda con términos de proximidad
SELECT * FROM Documentos
WHERE CONTAINS(contenido, 'NEAR((base, datos), 5, TRUE)');

-- Búsqueda con términos inflexionales
SELECT * FROM Articulos
WHERE CONTAINS(titulo, 'FORMSOF(INFLECTIONAL, correr)');`}</code></pre>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="text-blue-800 font-semibold mb-2">💡 Ventajas del Full Text Search</h4>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li>Búsquedas más inteligentes que LIKE</li>
              <li>Soporte para múltiples idiomas</li>
              <li>Ranking de relevancia en resultados</li>
              <li>Búsqueda fonética y de sinónimos</li>
            </ul>
          </div>
        </div>
      ),
      icon: <Search className="w-6 h-6" />,
      tags: ['Full Text Search', 'SQL Server', 'Búsquedas Avanzadas'],
      status: 'completed',
      color: 'bg-emerald-500'
    },
    {
      id: 13,
      title: 'Vistas Materializadas',
      subtitle: 'Optimización avanzada de consultas',
      description: 'Implementación de vistas materializadas para mejorar el rendimiento de consultas complejas y manejo de datos históricos.',
      content: (
        <div className="space-y-6">
          <div className="bg-violet-50 border-l-4 border-violet-500 p-4 rounded-r-lg">
            <h4 className="text-violet-800 font-semibold mb-2">🔧 ¿Qué son las Vistas Materializadas?</h4>
            <p className="text-violet-700 text-sm">
              Objetos que almacenan el resultado de una consulta como tabla física, 
              a diferencia de las vistas estándar que no almacenan datos.
            </p>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <h5 className="text-violet-400 mb-2">Implementación en SQL Server</h5>
            <pre className="text-sm"><code>{`-- Crear vista materializada
CREATE VIEW dbo.VentasMensuales
WITH SCHEMABINDING
AS
    SELECT 
        YEAR(FechaVenta) AS Año,
        MONTH(FechaVenta) AS Mes,
        COUNT_BIG(*) AS TotalVentas,
        SUM(Total) AS MontoTotal
    FROM dbo.Ventas
    GROUP BY YEAR(FechaVenta), MONTH(FechaVenta);
GO

-- Crear índice clusterizado para materializar
CREATE UNIQUE CLUSTERED INDEX IX_VentasMensuales 
ON dbo.VentasMensuales(Año, Mes);`}</code></pre>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">✅ Ventajas</h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Mejor rendimiento en consultas complejas</li>
                <li>• Reducción de carga del sistema</li>
                <li>• Útiles para datos históricos</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h5 className="font-semibold text-amber-800 mb-2">⚠️ Consideraciones</h5>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Ocupan espacio de almacenamiento</li>
                <li>• Pueden quedar desactualizadas</li>
                <li>• Sintaxis específica según SGBD</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      icon: <Eye className="w-6 h-6" />,
      tags: ['Vistas Materializadas', 'Optimización', 'SQL Server'],
      status: 'completed',
      color: 'bg-violet-500'
    },
    {
      id: 14,
      title: 'Defensa del Proyecto',
      subtitle: 'Presentación final',
      description: 'Defensa del proyecto final integrando todos los conceptos aprendidos durante el cuatrimestre.',
      content: (
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Defensa del Proyecto Final</h3>
            <p className="text-gray-600">Presentación integradora de todos los conceptos del cuatrimestre</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-green-800 mb-2">Componentes del proyecto:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Implementación del modelo objeto-relacional</li>
                <li>• API GraphQL funcional</li>
                <li>• Base de datos distribuida</li>
                <li>• Optimizaciones avanzadas</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      icon: <Trophy className="w-6 h-6" />,
      tags: ['Defensa', 'Proyecto Final'],
      status: 'completed',
      color: 'bg-green-600'
    }
  ];

  const filteredWeeks = weeks.filter(week => 
    week.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    week.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    week.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-800';
      case 'exam': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En progreso';
      case 'upcoming': return 'Próximo';
      case 'exam': return 'Examen';
      default: return 'Sin estado';
    }
  };

  const selectedWeekData = selectedWeek ? weeks.find(w => w.id === selectedWeek) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-400 to-yellow-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-black">Diario de Base de Datos Avanzada</h1>
              <p className="text-black-100 mt-1 text-black">Eliacid Castillo R</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              
            </nav>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section id="inicio" className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <User className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Eliacid Castillo R</h2>
            <p className="text-xl text-gray-600 mb-4">Estudiante de Base de Datos Avanzada</p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-1" />
                Universidad Técnica Nacional
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                II Cuatrimestre 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por semana, tema o tecnología..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Weeks Grid */}
      <section id="semanas" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Semanas del Cuatrimestre</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWeeks.map((week) => (
              <div
                key={week.id}
                onClick={() => setSelectedWeek(week.id)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
              >
                <div className={`${week.color} h-2`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${week.color} w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md`}>
                      {week.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(week.status)}`}>
                      {getStatusText(week.status)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Semana {week.id}</h3>
                  <h4 className="text-base font-medium text-gray-700 mb-2">{week.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{week.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {week.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {week.tags.length > 2 && (
                      <span className="text-gray-500 text-xs">+{week.tags.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedWeek && selectedWeekData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className={`${selectedWeekData.color} text-white p-6 rounded-t-2xl`}>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    {selectedWeekData.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Semana {selectedWeekData.id}</h2>
                    <h3 className="text-xl opacity-90">{selectedWeekData.title}</h3>
                    <p className="text-sm opacity-75 mt-1">{selectedWeekData.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedWeek(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{selectedWeekData.description}</p>
              </div>
              
              {selectedWeekData.content}
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-500 mb-3">TECNOLOGÍAS Y TEMAS</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWeekData.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-4 flex justify-between items-center">
              <button
                onClick={() => {
                  const prevWeek = selectedWeek > 1 ? selectedWeek - 1 : weeks.length;
                  setSelectedWeek(prevWeek);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-black-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>
              
              <div className="flex space-x-2">
                {weeks.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index + 1 === selectedWeek ? selectedWeekData.color.replace('bg-', 'bg-') : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => {
                  const nextWeek = selectedWeek < weeks.length ? selectedWeek + 1 : 1;
                  setSelectedWeek(nextWeek);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-400 to-yellow-600 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold text-black  ">Diario de Aprendizaje - Base de Datos Avanzada</p>
              <p className="text-black">Universidad Técnica Nacional • 2025</p>
            </div>
            <div className="flex space-x-6">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;