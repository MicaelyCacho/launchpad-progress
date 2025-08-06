import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  School, 
  FileText, 
  TrendingUp, 
  Eye, 
  Settings,
  Download,
  Filter
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export const AdminDashboard: React.FC = () => {
  // Mock data para demonstração
  const systemStats = [
    { metric: 'Total de Usuários', value: 156, change: '+12%', icon: Users },
    { metric: 'Salas Ativas', value: 24, change: '+3', icon: School },
    { metric: 'Redações Corrigidas', value: 342, change: '+23%', icon: FileText }
  ];

  const allRooms = [
    {
      nome: 'Redação ENEM 2024 - Turma A',
      professor: 'Prof. Maria Santos',
      alunos: 25,
      mediaGeral: 852,
      status: 'ativa',
      ultimaAtividade: '2024-08-05'
    },
    {
      nome: 'Literatura Brasileira',
      professor: 'Prof. João Silva',
      alunos: 30,
      mediaGeral: 785,
      status: 'ativa',
      ultimaAtividade: '2024-08-04'
    },
    {
      nome: 'Preparatório Vestibular',
      professor: 'Prof. Ana Costa',
      alunos: 18,
      mediaGeral: 821,
      status: 'pausa',
      ultimaAtividade: '2024-08-01'
    },
    {
      nome: 'Redação ENEM 2024 - Turma B',
      professor: 'Prof. Maria Santos',
      alunos: 22,
      mediaGeral: 798,
      status: 'ativa',
      ultimaAtividade: '2024-08-05'
    },
    {
      nome: 'Técnicas de Argumentação',
      professor: 'Prof. Carlos Lima',
      alunos: 28,
      mediaGeral: 834,
      status: 'ativa',
      ultimaAtividade: '2024-08-03'
    }
  ];

  const gradeDistribution = [
    { faixa: '900-1000', quantidade: 45, cor: 'hsl(var(--launch-green-gray))' },
    { faixa: '800-899', quantidade: 78, cor: 'hsl(var(--launch-wine-dark))' },
    { faixa: '700-799', quantidade: 65, cor: 'hsl(var(--launch-beige-yellow))' },
    { faixa: '600-699', quantidade: 32, cor: 'hsl(var(--launch-red-dark))' },
    { faixa: '0-599', quantidade: 12, cor: 'hsl(var(--launch-beige-light))' }
  ];

  const monthlyActivity = [
    { mes: 'Jan', usuarios: 120, redacoes: 280, novasSalas: 2 },
    { mes: 'Fev', usuarios: 132, redacoes: 310, novasSalas: 3 },
    { mes: 'Mar', usuarios: 145, redacoes: 325, novasSalas: 1 },
    { mes: 'Abr', usuarios: 150, redacoes: 340, novasSalas: 4 },
    { mes: 'Mai', usuarios: 156, redacoes: 365, novasSalas: 2 }
  ];

  const teacherPerformance = [
    { professor: 'Prof. Maria Santos', turmas: 2, alunos: 47, mediaGeral: 825, redacoesCorrigidas: 142 },
    { professor: 'Prof. João Silva', turmas: 1, alunos: 30, mediaGeral: 785, redacoesCorrigidas: 95 },
    { professor: 'Prof. Ana Costa', turmas: 1, alunos: 18, mediaGeral: 821, redacoesCorrigidas: 67 },
    { professor: 'Prof. Carlos Lima', turmas: 1, alunos: 28, mediaGeral: 834, redacoesCorrigidas: 89 }
  ];

  const getStatusColor = (status: string) => {
    return status === 'ativa' ? 'bg-launch-green-gray' : 'bg-launch-beige-yellow';
  };

  const getStatusText = (status: string) => {
    return status === 'ativa' ? 'Ativa' : 'Em Pausa';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-yeseva text-primary">Dashboard do Administrador</h1>
            <p className="text-muted-foreground">Visão geral completa da plataforma</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="border-launch-beige-light">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button className="bg-primary hover:bg-accent">
              <Download className="h-4 w-4 mr-2" />
              Relatório
            </Button>
          </div>
        </div>

        {/* Cards de Estatísticas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {systemStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="border-launch-beige-light">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.metric}</CardTitle>
                  <IconComponent className="h-4 w-4 text-launch-wine-dark" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-launch-green-gray">{stat.change}</span> vs mês anterior
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Gráficos de Análise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Atividade Mensal */}
          <Card className="border-launch-beige-light">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary">Atividade da Plataforma</CardTitle>
              <CardDescription>Evolução mensal de usuários e redações</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="usuarios" 
                    stroke="hsl(var(--launch-wine-dark))" 
                    strokeWidth={2}
                    name="Usuários"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="redacoes" 
                    stroke="hsl(var(--launch-red-dark))" 
                    strokeWidth={2}
                    name="Redações"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Distribuição de Notas */}
          <Card className="border-launch-beige-light">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary">Distribuição de Notas</CardTitle>
              <CardDescription>Faixas de notas dos alunos da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={gradeDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="faixa" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="quantidade" fill="hsl(var(--launch-wine-dark))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Todas as Salas */}
        <Card className="border-launch-beige-light">
          <CardHeader>
            <CardTitle className="font-yeseva text-primary flex items-center">
              <School className="h-5 w-5 mr-2" />
              Todas as Salas Virtuais
            </CardTitle>
            <CardDescription>Lista completa de salas com seus respectivos professores e estatísticas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {allRooms.map((room, index) => (
                <div key={index} className="border border-launch-beige-light rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-primary">{room.nome}</h3>
                        <Badge 
                          variant="default" 
                          className={getStatusColor(room.status)}
                        >
                          {getStatusText(room.status)}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Professor:</span>
                          <p className="font-medium">{room.professor}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Alunos:</span>
                          <p className="font-medium">{room.alunos} estudantes</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Média Geral:</span>
                          <p className="font-medium text-primary">{room.mediaGeral}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Última Atividade:</span>
                          <p className="font-medium">{room.ultimaAtividade}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance dos Professores */}
        <Card className="border-launch-beige-light">
          <CardHeader>
            <CardTitle className="font-yeseva text-primary flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Performance dos Professores
            </CardTitle>
            <CardDescription>Estatísticas de desempenho por professor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teacherPerformance.map((teacher, index) => (
                <div key={index} className="border border-launch-beige-light rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-2">{teacher.professor}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Turmas:</span>
                          <p className="font-medium">{teacher.turmas}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Alunos:</span>
                          <p className="font-medium">{teacher.alunos}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Média das Turmas:</span>
                          <p className="font-medium text-primary">{teacher.mediaGeral}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Redações Corrigidas:</span>
                          <p className="font-medium">{teacher.redacoesCorrigidas}</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};